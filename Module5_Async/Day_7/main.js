// if export is default you can give any name
// import something from "./script.js";
// This is default import 
import User from "./script.js";

// This is named import
// named import should the same name mentioned in the export
// import { printName , printAge } from "./script.js";


// if you want use a custom name , in the named import
import { printAge as something , printName } from "./script.js";


const user = new User("Aditya",20);
console.log(user);


printName(user);
something(user);

import { add,multiply,PI } from "./calculator.js";
add(2,3);
multiply(3,4);
PI();