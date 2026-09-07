import paramiko

hostname = "51.79.228.153"
username = "optimusinfinity"
password = "M=BG{A2KI#v^gm#9"

client = paramiko.SSHClient()
client.set_missing_host_key_policy(paramiko.AutoAddPolicy())

try:
    client.connect(hostname, port=22, username=username, password=password, timeout=10)
    stdin, stdout, stderr = client.exec_command("uapi Mysql delete_database name=optimusinfinity_appdb", timeout=15)
    print(stdout.read().decode('utf-8').strip())
    client.close()
    print("Test database cleaned up.")
except Exception as e:
    print(f"Error: {e}")
