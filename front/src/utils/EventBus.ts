class EventBus {
  private listeners: Record<string, Function[]> = {};
  private static instance: EventBus | null = null;

  // Singleton Pattern
  private constructor() {}

  public static getInstance(): EventBus {
    if (!EventBus.instance) {
      EventBus.instance = new EventBus();
    }
    return EventBus.instance;
  }

  public subscribe(event: string, callback: Function) {
    if (!this.listeners[event]) this.listeners[event] = [];
    this.listeners[event].push(callback);
  }

  public unsubscribe(event: string, callback: Function) {
    if (this.listeners[event])
      this.listeners[event] = this.listeners[event].filter(
        (listener) => listener !== callback
      );
  }

  public emit(event: string, data?: any) {
    if (this.listeners[event])
      this.listeners[event].forEach((callback) => callback(data));
  }
}

export default EventBus.getInstance();
