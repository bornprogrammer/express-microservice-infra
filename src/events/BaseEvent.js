import events from "events";

export default class BaseEvent {

  eventName;

  eventEmitter;

  constructor(eventName) {
    this.eventName = eventName;
    this.eventEmitter = new events.EventEmitter();
    this.register();
  }

  register() {
    try {
      this.eventEmitter.on(this.eventName, this.callHandle.bind(this));
    } catch (error) {
      console.log("event error while registering".error);
    }
  }

  callHandle(data) {
    try {
      this.handle(data);
    } catch (error) {
      console.log("event triggered error", error);
    }
  }

  emit(eventName, data) {
    setTimeout(() => {
      this.eventEmitter.emit(eventName, data);
    }, 3000);
  }
}