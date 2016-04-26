class TinyEE {
  constructor() {
    this.events = new Map();
  }
  on(event, action) {
    this.events.set(event, action)
  }
  emit(event, ...args) {
    const eventToCall = this.events.get(event);
    eventToCall.apply(this, args);
  }
}
