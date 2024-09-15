/**
 *
 * Loop Lab
 *
 */
console.log("Hello World");

// Part 1 - Fizz Bizz Problem
for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(`${i} is a Fizz Buzz`);
  } else if (i % 3 == 0) {
    console.log(`${i} is a Fizz`);
  } else if (i % 5 == 0) {
    console.log(`${i} is a Buzz`);
  } else {
    console.log(`${i}`);
  }
}

// Part 2

// Part 3
let csvFile =
  "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

let csvTestFile =
  "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

let col = "";
let col2 = "";
let col3 = "";
let col4 = "";
let countComma = 0;
let isNewLine = false;

for (let i = 0; i < csvFile.length - 1; i++) {
  if (csvFile[i] !== "\n") {
    // console.log("i: ", csvFile[i]);
    if (csvFile[i] !== "," && countComma === 0) {
      col += csvFile[i];
    } else if (csvFile[i] !== "," && countComma === 1) {
      col2 += csvFile[i];
    } else if (csvFile[i] !== "," && countComma === 2) {
      col3 += csvFile[i];
    } else if (csvFile[i] !== "," && countComma === 3) {
      col4 += csvFile[i];
    } else if (csvFile[i] === ",") {
      countComma++;
    }
  } else {
    console.log(col, col2, col3, col4);
    // continue;
  }
}
