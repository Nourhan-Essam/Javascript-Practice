//named import
import {PI} from "./math.js"; 

//default import
import customGreet from "./greet.js";

//Renaming using as
import {add as sum} from "./math.js";

console.log(PI);  //3.14
console.log(sum (5 ,5)); //10
customGreet(); //Hello
