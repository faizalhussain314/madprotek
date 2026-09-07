import paramiko
import traceback

hostname = "51.79.228.153"
username = "optimusinfinity"
password = "M=BG{A2KI#v^gm#9"

client = paramiko.SSHClient()
client.set_missing_host_key_policy(paramiko.AutoAddPolicy())

try:
    client.connect(hostname, port=22, username=username, password=password, timeout=10)
    print("SSH Connection Successful!\n" + "="*50)

    commands = [
        ("Kernel & OS", "uname -a; redhat-release 2>/dev/null || cat /etc/redhat-release 2>/dev/null || cat /etc/system-release 2>/dev/null"),
        ("System Memory", "cat /proc/meminfo | grep -iE 'MemTotal|MemAvailable|SwapTotal'"),
        ("Search Node Binaries", "find /usr/local /usr/bin /opt/cpanel /home/optimusinfinity -name node 2>/dev/null"),
        ("Search NPM Binaries", "find /usr/local /usr/bin /opt/cpanel /home/optimusinfinity -name npm 2>/dev/null"),
        ("CloudLinux / cPanel Node Selector", "which selectorctl cloudlinux-selector ea-ruby ea-nodejs 2>&1"),
        ("Python & Build Tools", "python3 --version 2>&1; gcc --version 2>&1 | head -n 1; git --version 2>&1"),
        ("User Home & Permissions", "ls -la /home/optimusinfinity"),
        ("Public HTML Directory", "ls -la /home/optimusinfinity/public_html"),
        ("cPanel Environment PATH", "echo $PATH; ulimit -a")
    ]

    for title, cmd in commands:
        try:
            stdin, stdout, stderr = client.exec_command(cmd, timeout=10)
            out = stdout.read().decode('utf-8').strip()
            err = stderr.read().decode('utf-8').strip()
            print(f"=== {title} ===")
            if out:
                print(out)
            if err:
                print(f"[STDERR]: {err}")
            print()
        except Exception as ce:
            print(f"=== {title} ===")
            print(f"Command Error: {ce}\n")

    client.close()
    print("="*50 + "\nDiagnostics Finished.")

except Exception as e:
    print(f"SSH Connection Failed: {e}")
    traceback.print_exc()
