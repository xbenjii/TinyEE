class TinyEE {
  constructor() {
    this.events = new Map();
  }
  on(event, action) {
    this.events.set(event, action)
  }
  emit(event, ...args) {
    const eventToCall = this.events.get(event);
    if(typeof event === 'function') {
      eventToCall.apply(this, args);
    } else {
      throw new Error(`Event ${event} doesn't exist`);
    }
  }
  remove(event) {
    this.events.delete(event);
  }
}
