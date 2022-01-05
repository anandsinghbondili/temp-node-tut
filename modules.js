//CommonJS - every file in node is a module
//Module
const names = require('./names.js')
const sayHi = require('./Utils.js')
const data = require('./alternative_flavor.js')

require('./mind-grenade')
sayHi('Susan');
sayHi(names.john)
sayHi(names.peter)  

// console.log(names);


// console.log(data);