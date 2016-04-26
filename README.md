# TinyEE - A tiny event emitter class.

## Usage
```
const ee = new TinyEE();

ee.on('foo', () => console.log('Foo called'));
ee.on('bar', bar => console.log(bar));

ee.emit('foo');
ee.emit('bar', 'bar');
```
