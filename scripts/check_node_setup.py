import paramiko

hostname = "51.79.228.153"
username = "optimusinfinity"
password = "M=BG{A2KI#v^gm#9"

client = paramiko.SSHClient()
client.set_missing_host_key_policy(paramiko.AutoAddPolicy())

try:
    client.connect(hostname, port=22, username=username, password=password, timeout=10)

    commands = [
        ("CloudLinux Alt Node Versions", "ls -la /opt/alt/ 2>/dev/null | grep node"),
        ("Check Alt Node 18/20", "/opt/alt/nodejs18/bin/node -v 2>/dev/null; /opt/alt/nodejs20/bin/node -v 2>/dev/null; /opt/alt/nodejs22/bin/node -v 2>/dev/null"),
        ("Check NVM capability", "curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash 2>&1 | tail -n 10"),
        ("Test NVM Load", "export NVM_DIR=\"$HOME/.nvm\"; [ -s \"$NVM_DIR/nvm.sh\" ] && \\. \"$NVM_DIR/nvm.sh\"; nvm --version 2>&1")
    ]

    for title, cmd in commands:
        stdin, stdout, stderr = client.exec_command(cmd, timeout=30)
        out = stdout.read().decode('utf-8').strip()
        err = stderr.read().decode('utf-8').strip()
        print(f"=== {title} ===")
        print(out if out else f"[EMPTY/ERR]: {err}")
        print()

    client.close()

except Exception as e:
    print(f"Error: {e}")
