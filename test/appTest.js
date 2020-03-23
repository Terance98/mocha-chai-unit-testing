const assert = require('chai').assert;

const app = require('../app');

const sayHelloResult = app.sayHello();
const addNumbersResult = app.addNumbers(5,5);


describe('App', function(){
    it('sayHello should return hello', function(){
        assert.equal(sayHelloResult, "hello");
    });

    it('sayHello should return type String', function(){
        assert.typeOf(sayHelloResult, 'string');
    });

    it('addNumbers should be above 5', function(){
        assert.isAbove(addNumbersResult, 5);
    });

    it('addNumbers should return type Number', function(){
        assert.typeOf(addNumbersResult, 'number');
    });
});