function fishBash(input) {
  for (let i = 1; i <= input; i++) {
    let output = "";

    if (i % 3 === 0) {
      output += "fish";
    }
    if (i % 5 === 0) {
      output += "bash";
    }

    if (output === "") {
      output = i.toString();
    }

    console.log(output);
  }
}
fishBash(15);

// SORTING LOWEST TO HIGHEST
let inputArrayINT = [3, 7, 2, 1, 8, 4, 5, 6];

function sortAsc(inputArrayINT) {
  for (let i = 0; i < inputArrayINT.length - 1; i++) {
    for (let k = i + 1; k < inputArrayINT.length; k++) {
      if (inputArrayINT[k] < inputArrayINT[i]) {
        let temp = inputArrayINT[i];
        inputArrayINT[i] = inputArrayINT[k];
        inputArrayINT[k] = temp;
      }
    }
  }
  return inputArrayINT;
}
console.log(sortAsc(inputArrayINT));

// SORTING HIGHEST TO LOWEST
function sortDesc(inputArrayINT) {
  for (let i = 0; i < inputArrayINT.length - 1; i++) {
    for (let k = i + 1; k < inputArrayINT.length; k++) {
      if (inputArrayINT[k] > inputArrayINT[i]) {
        let temp = inputArrayINT[i];
        inputArrayINT[i] = inputArrayINT[k];
        inputArrayINT[k] = temp;
      }
    }
  }
  return inputArrayINT;
}
console.log(sortDesc(inputArrayINT));

// REVERSED STRING
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  if (str === reversed) {
    return true;
  } else {
    return false;
  }
}

console.log(reverseString("kasur ini rusak"));
console.log(reverseString("hello world"));

module.exports = { fishBash, sortAsc, sortDesc, reverseString };
