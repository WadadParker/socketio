import express from 'express';
import {createServer} from "node:http";
import { fileURLToPath } from 'node:url';
import { dirname , join } from 'node:path';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);
const io = new Server(server);
// This io is actually a Wrapper around our server instance so that it listens to all requests going to this server

const __dirname = dirname(fileURLToPath(import.meta.url));
// This dirname is just so we can directly send html file as a response to that API call
app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

io.on('connection', (socket) => {
    console.log('Connection established');
    socket.broadcast.emit('Hello from broadcast?')
    socket.on('chat message', (msg) => {
        console.log('received message',msg);
        io.emit('chat message',msg)
    })
    socket.on('disconnect', () => {
        console.log('User disconnected!');
    } )
})

server.listen(3000, () => {
    console.log('server runing at http://localhost:3000');
});