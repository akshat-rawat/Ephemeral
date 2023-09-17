import { Server } from "socket.io";
import { createServer, Server as HttpServer } from "http";
import ioClient, { Socket } from "socket.io-client";
import { setupChatSocket } from "../../src/sockets/chatSocket";

describe("WebSocket Chat Tests", () => {
  let httpServer: HttpServer;
  let socket: Socket;

  beforeAll((done) => {
    httpServer = createServer();
    let ioServer = new Server(httpServer);
    setupChatSocket(ioServer);
    httpServer.listen(4001, done);
  });

  beforeEach((done) => {
    socket = ioClient("http://localhost:4001");
    socket.on("connect", () => done());
  });

  afterEach(() => {
    socket.close();
  });

  afterAll((done) => {
    httpServer.close(done);
  });

  it("should send and receive messages", (done) => {
    socket.emit("message", "Hello, server!");

    socket.on("message", (data: string) => {
      expect(data).toBe("Hello, server!");
      done();
    });
  });

  it("should handle disconnect", (done) => {
    socket.on("disconnect", () => done());
    socket.disconnect();
  });
});
