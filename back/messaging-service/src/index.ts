import express, { Express, Request, Response } from "express";
import http from "http";
import { Server } from "socket.io";
import { setupChatSocket } from "./sockets/chatSocket";

const app: Express = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: true } }); // Change to URL for prod
const port = 3001;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Messaging service");
});

setupChatSocket(io);

server.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
