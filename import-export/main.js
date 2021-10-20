import { PI, sort } from "./app.js";
import { cloneShallow } from "./app";
import * as utils from "./app"; //app.js içerisindeki tanımlanan tüm değerleri alabilirsin

import Truck from "./importExport"; //çağrılan isim farklı olabilir
console.log(new Truck(6));

import person from "./importExport";
console.log(person);
console.log(PI);
console.log(sort(9, 3, 7, 1, 0, -2));

console.log(utils.PI + utils.E + utils.cloneShallow); //ekranda hepsini görebilirsin utils etiketi ile

const obj = { name: "Alex" };
console.log(cloneShallow({ obj }));
console.log(obj === cloneShallow(obj));
