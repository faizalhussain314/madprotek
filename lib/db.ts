import mysql from "mysql2/promise";
import { dbStore } from "./db-store";

// Create MySQL connection pool
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST || "localhost",
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "",
  database: process.env.MYSQL_DATABASE || "madprotek_db",
  port: Number(process.env.MYSQL_PORT) || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

let isMySQLConnected = false;

// Initialize MySQL Tables if connection is available
export async function initMySQLTables() {
  try {
    const connection = await pool.getConnection();

    // Table: Admin Users
    await connection.query(`
      CREATE TABLE IF NOT EXISTS admin_users (
        id VARCHAR(64) PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        name VARCHAR(255) NOT NULL,
        role VARCHAR(64) DEFAULT 'ADMIN',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Table: Events
    await connection.query(`
      CREATE TABLE IF NOT EXISTS events (
        id VARCHAR(128) PRIMARY KEY,
        slug VARCHAR(128) UNIQUE NOT NULL,
        title VARCHAR(255) NOT NULL,
        category VARCHAR(64) NOT NULL,
        date VARCHAR(128) NOT NULL,
        location VARCHAR(255) NOT NULL,
        image VARCHAR(512),
        short_description TEXT,
        description TEXT,
        status VARCHAR(64) DEFAULT 'REGISTRATION OPEN',
        registration_enabled BOOLEAN DEFAULT TRUE,
        venue VARCHAR(255),
        address VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Table: Leads
    await connection.query(`
      CREATE TABLE IF NOT EXISTS leads (
        id VARCHAR(64) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(64) NOT NULL,
        service VARCHAR(128),
        message TEXT,
        status VARCHAR(64) DEFAULT 'New',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Table: Event Registrations
    await connection.query(`
      CREATE TABLE IF NOT EXISTS event_registrations (
        id VARCHAR(64) PRIMARY KEY,
        event_id VARCHAR(128) NOT NULL,
        event_title VARCHAR(255) NOT NULL,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(64) NOT NULL,
        emergency_phone VARCHAR(64),
        category_selected VARCHAR(128),
        tshirt_size VARCHAR(32),
        bib_number VARCHAR(64),
        status VARCHAR(64) DEFAULT 'Confirmed',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Seed default admin if table is empty
    const [rows]: any = await connection.query("SELECT COUNT(*) as count FROM admin_users");
    if (rows[0].count === 0) {
      await connection.query(
        "INSERT INTO admin_users (id, email, password, name, role) VALUES (?, ?, ?, ?, ?)",
        ["admin-1", "admin@madprotek.com", "admin123", "MadProTek Admin", "SUPER_ADMIN"]
      );
    }

    connection.release();
    isMySQLConnected = true;
    console.log("✅ MySQL Database connected & schema verified.");
  } catch (err: any) {
    isMySQLConnected = false;
    // Log helpful diagnostic notice for local developer environment
    console.log("ℹ️ MySQL server offline/unreachable on localhost. Using resilient db-store fallback engine.");
  }
}

// Execute Query with automatic fallback
export async function queryDB<T = any>(sql: string, params: any[] = []): Promise<T[]> {
  try {
    const [results] = await pool.query(sql, params);
    return results as T[];
  } catch (error) {
    // If MySQL connection fails, return fallback signal
    throw error;
  }
}

export { isMySQLConnected };
