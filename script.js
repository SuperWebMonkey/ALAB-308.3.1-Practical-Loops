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

// Part 2 - Prime Numbers
console.log("\nPart - 2: Prime Numbers:");
let n = 5;
let max = n + 25;
let nextPrime = 0;
let isPrime = true;

for (let j = n + 1; j < max; j++) {
  // find before n
  let i = 2;
  while (i <= n) {
    console.log("before n", i);
    if (j % i == 0) {
      isPrime = false;
      console.log(`${j} is ${isPrime}`);
      break;
    }

    i++;
  }

  // find after n
  let temp = n;
  for (temp; temp <= j; temp++) {
    // console.log("after n", temp);
    if (j % temp == 0) {
      isPrime = false;
      break;
    } else {
      nextPrime = j;
    }
  }
}

if (isPrime) {
  console.log(`The next prime after ${n} is ${nextPrime}`);
} else {
  console.log(`There is no prime in the next ${max} after ${n}`);
}

// Part 3 - CSV File
console.log("\nPart - 3: CSV");
let csvFile =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26\n";

let col = "";
let col2 = " ";
let col3 = " ";
let col4 = " ";
let countComma = 0;
let isNewLine = false;

// for the regular csv file
for (let i = 0; i < csvFile.length; i++) {
  if (csvFile[i] !== "\n") {
    // console.log("i: ",(csvFile[i]);
    if (csvFile[i] !== "," && countComma === 0) {
      col += csvFile[i];
      //   console.log("col: ",(csvFile[i]);
    } else if (csvFile[i] !== "," && countComma === 1) {
      col2 += csvFile[i];
      //   console.log("col2: ",(csvFile[i]);
    } else if (csvFile[i] !== "," && countComma === 2) {
      col3 += csvFile[i];
      //   console.log("col3: ",(csvFile[i]);
    } else if (csvFile[i] !== "," && countComma === 3) {
      col4 += csvFile[i];
      //   console.log("col4: ",(csvFile[i]);
    } else if (csvFile[i] === ",") {
      countComma++;
      //   console.log("comma count: ", countComma);
    }
  } else {
    countComma = 0;

    console.log(col, col2, col3, col4, "\n");
    console.log("");

    col = "";
    col2 = " ";
    col3 = " ";
    col4 = " ";
    // continue;
  }
}

// For CSV Test File
console.log("csv test file:");

let csvTestFile =
  "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232\n";

let colTest = "";
let colTest2 = " ";
let colTest3 = " ";
let colTest4 = " ";

for (let i = 0; i < csvTestFile.length; i++) {
  if (csvTestFile[i] !== "\n") {
    // console.log("i: ", csvTestFile[i]);
    if (csvTestFile[i] !== "," && countComma === 0) {
      colTest += csvTestFile[i];
      //   console.log("col: ", csvTestFile[i]);
    } else if (csvTestFile[i] !== "," && countComma === 1) {
      colTest2 += csvTestFile[i];
      //   console.log("col2: ", csvTestFile[i]);
    } else if (csvTestFile[i] !== "," && countComma === 2) {
      colTest3 += csvTestFile[i];
      //   console.log("col3: ", csvTestFile[i]);
    } else if (csvTestFile[i] !== "," && countComma === 3) {
      colTest4 += csvTestFile[i];
      //   console.log("col4: ", csvTestFile[i]);
    } else if (csvTestFile[i] === ",") {
      countComma++;
      //   console.log("comma count: ", countComma);
    }
  } else {
    countComma = 0;

    console.log(colTest, colTest2, colTest3, colTest4, "\n");
    console.log("");

    colTest = "";
    colTest2 = " ";
    colTest3 = " ";
    colTest4 = " ";
    // continue;
  }
}
