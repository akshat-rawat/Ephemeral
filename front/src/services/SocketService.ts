import { io, Socket } from "socket.io-client";
import eventBus from "../utils/EventBus";

class SocketService {
  private socket: Socket | null = null;
  private static instance: SocketService | null = null;
  private readonly serverUrl: string = "http://localhost:3001"; // TODO: Change to API Gateway

  // Singleton Pattern
  private constructor() {}

  public static getInstance(): SocketService {
    if (!SocketService.instance) SocketService.instance = new SocketService();
    return SocketService.instance;
  }

  public initializeSocket() {
    if (!this.socket) {
      this.socket = io(this.serverUrl);
      this.socket.connect();
      this.setupSocketListeners();
    }
  }

  private setupSocketListeners() {
    this.socket?.on("message", (data: string) => {
      eventBus.emit("messageReceived", data);
    });
  }

  public sendMessage(message: string) {
    if (this.socket) this.socket.emit("message", message);
  }

  public disconnect() {
    if (this.socket) this.socket.disconnect();
  }
}

export default SocketService.getInstance();
