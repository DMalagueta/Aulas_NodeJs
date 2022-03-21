const EventEmitter = require('events');

class Counter extends EventEmitter {

    static INCREMENT = 'increment';

    #count = 0;
    #timer = null;

    constructor() {
        super();
    }

    start(time) {
        this.#timer = setInterval(() => {
            this.#count++;
            this.emit(Counter.INCREMENT, this.#count);
        }, time * 1000);
    }

    stop() {
        clearInterval(this.#timer);
    }
}

module.exports = Counter;