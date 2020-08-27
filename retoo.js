console.log("un %s y un %s", "cerdito", "conejito");
console.info("Hola Mari");
console.warn("Hola pequeño");

console.assert(53 == "53");
console.assert(53 === "53");
console.trace("Holis");

const util = require("util");
 const debuf = util.debuglog("boo");

 debuf("holi chica");



 const util require('util');
 const hi = util.deprecate(() =>{
     console.log('hellow')
 }, 'hola este es un mensaje de bienvenida');

 hi();