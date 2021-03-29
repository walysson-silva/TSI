import socket

serve = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
serve.bind(('',7000)) 
while True:
    msg_bytes, ip_cliente = serve.recvfrom(2048)
    msg_res = msg_bytes.decode()
    serve.sendto(msg_res.encode(),ip_cliente)
    print(msg_res)#
