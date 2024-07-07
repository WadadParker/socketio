# Socket.io 

- We will first setup a normal repo with socket.io & express.
- - Use express to create a web server & create a server instance
- - use createServer function of node:http 
- Setup Socket.io
- - import Server from socket.io library
- - Create a new instance of websocket server io
- - From index.html, setup a client socket instance to emit message from client to the socket server (now that's cool)
- Broadcasting
- - We either send an event to everyone, or we broadcast event to everyone except the event coming from that particular socket
- Sending Messages
- - When sending message from server to client, we use socket.emit to emit event from server and socket.on to recieve that event in client
- - When sending message from client to server, we use socket.emit to emit event from client and socket.on to recieve that event in server
- - (I know the last point sounds exactly same, but trust me. Unless you do not repeat this, you will get confused when doing sockets first time)
- - You can send as many arguments as you want in an event, you have to mention the name of the event in that case

Read more on socket.io docs to understand more features & techniques used for websocket.