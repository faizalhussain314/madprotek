import { cookies } from "next/headers";
import { dbStore } from "./db-store";

const COOKIE_NAME = "madprotek_admin_token";

export async function verifyAdminCredentials(email: string, pass: string) {
  const cleanEmail = (email || "").trim().toLowerCase();
  const cleanPass = (pass || "").trim();

  const demoEmail = (process.env.ADMIN_EMAIL || "admin@madprotek.com").trim().toLowerCase();
  const demoPass = (process.env.ADMIN_PASSWORD || "admin123").trim();

  // Match demo credentials
  if (cleanEmail === demoEmail && cleanPass === demoPass) {
    return {
      id: "admin-1",
      email: demoEmail,
      name: "MadProTek Admin Lead",
      role: "SUPER_ADMIN",
    };
  }

  // Match fallback db store
  const user = dbStore.getAdminByEmail(cleanEmail);
  if (user && user.password.trim() === cleanPass) {
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    };
  }

  return null;
}

export async function setAdminSessionCookie(user: { id: string; email: string; name: string; role: string }) {
  const cookieStore = await cookies();
  const tokenPayload = JSON.stringify({
    ...user,
    exp: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
  });

  cookieStore.set(COOKIE_NAME, Buffer.from(tokenPayload).toString("base64"), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 86400, // 1 day
    sameSite: "lax",
  });
}

export async function getAdminSession() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)?.value;

    if (!token) return null;

    const decoded = JSON.parse(Buffer.from(token, "base64").toString("utf-8"));
    if (decoded.exp && decoded.exp < Date.now()) {
      return null;
    }

    return decoded;
  } catch (error) {
    return null;
  }
}

export async function clearAdminSessionCookie() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}
