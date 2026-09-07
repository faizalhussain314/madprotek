import paramiko

hostname = "51.79.228.153"
username = "optimusinfinity"
password = "M=BG{A2KI#v^gm#9"

client = paramiko.SSHClient()
client.set_missing_host_key_policy(paramiko.AutoAddPolicy())

try:
    client.connect(hostname, port=22, username=username, password=password, timeout=10)

    cmd = """
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh"
    nvm install 20
    nvm use 20
    node -v
    npm -v
    """

    stdin, stdout, stderr = client.exec_command(cmd, timeout=60)
    out = stdout.read().decode('utf-8').strip()
    err = stderr.read().decode('utf-8').strip()

    print("=== Node 20 Environment Output ===")
    print(out)
    if err:
        print("\n[STDERR]:\n" + err)

    client.close()

except Exception as e:
    print(f"Error: {e}")
