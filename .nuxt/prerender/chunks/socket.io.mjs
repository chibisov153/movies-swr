import { defineEventHandler } from 'file://D:/training_ground/Nuxt/Nuxt3-Sea-Battle/node_modules/h3/dist/index.mjs';
import express from 'file://D:/training_ground/Nuxt/Nuxt3-Sea-Battle/node_modules/express/index.js';
import { Server } from 'file://D:/training_ground/Nuxt/Nuxt3-Sea-Battle/node_modules/socket.io/wrapper.mjs';

const app = express();
const server = app.listen(8080, function() {
  console.log("server running on port 3001");
});
const io = new Server(server, {
  //path: "/api/socket/",
  cors: {
    origin: "*"
  }
  // allowEIO3: true,
  // cors: {credentials: true, origin: 'http://localhost:8888'}
});
io.on("connection", (socket) => {
  console.log("Connection", socket.id);
  socket.on("chat message", (msg) => {
    console.log("message: " + msg);
    io.emit("chat message", msg);
  });
});
const socket_io = defineEventHandler((event) => {
});

export { socket_io as default };
//# sourceMappingURL=socket.io.mjs.map
