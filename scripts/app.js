"use strict";
const obj = JSON.parse('{ "key": 24}');
console.log(obj);
const str = JSON.stringify(obj);
console.log(str);
const lS = localStorage.setItem("text", str);
console.log(lS);