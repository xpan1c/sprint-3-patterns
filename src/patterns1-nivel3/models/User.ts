export class User {
    private name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    receiveMessage(topicName: string, message: string): void {
      console.log(`${this.name} recibió un nuevo mensaje en el tema ${topicName}: ${message}`);
    }
  }
  