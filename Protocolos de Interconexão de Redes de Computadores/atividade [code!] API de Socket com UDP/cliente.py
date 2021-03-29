import socket

cliente = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

while True:
    msg_cliente = input("Digite sua Mensagem: ")
    cliente.sendto(msg_cliente.encode(),("192.168.0.105",7000))
    msg_bytes, ip_server = cliente.recvfrom(2048)
    print(msg_bytes.decode())