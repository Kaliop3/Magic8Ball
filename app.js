let rs = require("readline-sync");
const fs = require("fs");
const odp = fs.readFileSync(__dirname + "/odp.txt").toString().split("\n");
const ask = rs.question("O co chcesz zapytać ");
let answer = odp[Math.floor(Math.random() * odp.length)];
console.log(answer);
