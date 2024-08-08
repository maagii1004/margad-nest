console.log("a");

let result = "";
 

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= i; j++) {
    result += "# ";
  }
  result += "\n";
}
console.log(result);

console.log("b");

let result2 = "";

for (let i = 10; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    result2 += "# ";
  }
  result2 += "\n";
}

console.log(result2);

console.log("c");

let result3 = "";
const totalRowsForC = 10;

for (let i = totalRowsForC; i >= 1; i--) {

  for (let k = 0; k < totalRowsForC - i; k++) {
    result3 += "  ";
  }

  for (let j = 1; j <= i; j++) {
    result3  += "# ";
  }
  
  result3 += "\n";
}

console.log(result3);

console.log("d");

let result4 = "";

const totalRowsForD = 10;

for (let i = 1; i <= totalRowsForD; i++) {

  for (let k = 0; k < totalRowsForD - i; k++) {
    result4 += "  ";
  }

  for (let j = 1; j <= i; j++) {
    result4  += "# ";
  }
  
  result4 += "\n";
}
console.log(result4);


