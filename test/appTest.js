const assert = require('chai').assert;
const expect = require('chai').expect;

const app = require('../app');

const sayHelloResult = app.sayHello();
const addNumbersResult = app.addNumbers(5,5);
const fetchData = app.fetchData();
// fetchData.then(data => console.log(data));

describe('App', function(){
    describe('sayHello()', function(){
        it('sayHello should return hello', function(){
            assert.equal(sayHelloResult, "hello");
        });

        it('sayHello should return type String', function(){
            assert.typeOf(sayHelloResult, 'string');
        });
    });
    describe('addNumbers()', function(){

        it('addNumbers should be above 5', function(){
            assert.isAbove(addNumbersResult, 5);
        });

        it('addNumbers should return type Number', function(){
            assert.typeOf(addNumbersResult, 'number');
        });
    });

    describe('fetchData()', function(){
        it('check user id = 1', function(){
            return fetchData.then(function(data){
                expect(data.userId).to.equal(1);
            //     assert.equal(data.title, 'delectus aut autem');
            //     assert.ok(true);
            });
        });
    });

});