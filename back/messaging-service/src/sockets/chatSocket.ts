import { Server, Socket } from "socket.io";

export function setupChatSocket(io: Server) {
  io.on("connection", (socket: Socket) => {
    console.log(`Socket connected: ${socket.id}`);

    socket.on("message", (data: string) => {
      console.log(`Received message: ${data}`);
      io.emit("message", data);
    });

    socket.on("disconnect", () => {
      console.log(`Socket disconnected: ${socket.id}`);
    });
  });
}
