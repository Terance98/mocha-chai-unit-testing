const fetch = require('node-fetch');
module.exports = {
    sayHello: function(){
        return 'hello';
    },
    addNumbers: function(value1, value2){
        return value1+value2;
    },
    fetchData: function(){
        return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
    }
}