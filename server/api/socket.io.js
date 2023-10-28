import express from 'express';
import { createServer } from 'node:http';
import { Server } from 'socket.io';

const app = express();
const server = app.listen(8080, function () {
  console.log("server running on port 3001");
});

const io = new Server(server,{
  //path: "/api/socket/",
  cors: {
    origin: '*',
  }
  // allowEIO3: true,
  // cors: {credentials: true, origin: 'http://localhost:8888'}
});

io.on('connection', (socket) => {
  console.log('Connection', socket.id);
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
})

// server.listen(8080, () => {
//   console.log('server running at http://localhost:3000');
// });

export default defineEventHandler((event) => {

})
