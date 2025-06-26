import { Persona } from './objeto.js';

let y = Persona.hijo
var {nombre, edad} = Persona

console.log(nombre, edad)

var {nombre, edad} = Persona.hijo
console.log(nombre, edad)

