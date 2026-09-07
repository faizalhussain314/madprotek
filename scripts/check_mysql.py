import paramiko

hostname = "51.79.228.153"
username = "optimusinfinity"
password = "M=BG{A2KI#v^gm#9"

client = paramiko.SSHClient()
client.set_missing_host_key_policy(paramiko.AutoAddPolicy())

try:
    client.connect(hostname, port=22, username=username, password=password, timeout=10)

    commands = [
        ("MySQL / MariaDB Version", "mysql --version 2>&1 || mariadb --version 2>&1"),
        ("cPanel MySQL API (uapi)", "uapi Mysql get_server_information 2>&1 || echo 'uapi not in path'"),
        ("Check cPanel Databases", "uapi Mysql list_databases 2>&1 | head -n 20"),
        ("Check Localhost Port 3306", "nc -z -v 127.0.0.1 3306 2>&1 || ss -tulpn | grep 3306 2>&1")
    ]

    for title, cmd in commands:
        stdin, stdout, stderr = client.exec_command(cmd, timeout=15)
        out = stdout.read().decode('utf-8').strip()
        err = stderr.read().decode('utf-8').strip()
        print(f"=== {title} ===")
        print(out if out else f"[STDERR/EMPTY]: {err}")
        print()

    client.close()

except Exception as e:
    print(f"Error: {e}")
