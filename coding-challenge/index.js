const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Please Enter your lucky number => ", (number) => {
  let output = "";
  for (let i = 1; i <= number; i++) {
    for (let j = 0; j < number - i; j++) {
      output += "  ";
    }
    for (let k = 1; k <= i * 2; k++) {
      if (k % 2 !== 0) {
        output += " "+k;
      }
    }
    output += "\n";
  }
  for (let i = 1; i <= number - 1; i++) {
    for (let j = 0; j < i; j++) {
      output += "  ";
    }
    for (let k = 0; k < (number - i) * 2; k++) {
      if (k % 2 !== 0) {
        output += " "+k;
      }
    }
    output += "\n";
  }
  console.log(output);
  readline.close();
});
