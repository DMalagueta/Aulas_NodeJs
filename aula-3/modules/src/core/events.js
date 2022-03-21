const Counter = require('./Counter');

const c1 = new Counter();
const c2 = new Counter();

c1.start(1);
c2.start(3);

c1.on(Counter.INCREMENT, number => {
    console.log('C1', number);

    if (number >= 10) {
        c1.stop();
    }
});

c2.once(Counter.INCREMENT, number => console.log('C2', number));