// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  function caesar(input, shift, encode = true) {
    if (!encode) {
      shift = -shift;
    }
    if (!shift || shift > 25 || shift < -25 || shift === 0) return false;
    inputCode = input.toLowerCase();
    inputArray = inputCode.split("");
    let alphabetNumber = [];
    inputArray.forEach((letter) => {
      let index = alphabet.indexOf(letter);
      if (index === -1) {
        alphabetNumber.push(letter);
      } else {
        alphabetNumber.push(index);
      }
    });
    let inputShifted = [];
    alphabetNumber.forEach((letter) => {
      if (isNaN(letter) || letter === " ") {
        inputShifted.push(letter);
      } else {
        let shifted = letter + shift;
        if (shifted > 25) {
          shifted -= 26;
        } else if (shifted < 0) {
          shifted += 26;
        }
        inputShifted.push(shifted);
      }
    });
    let output = [];
    inputShifted.forEach((index) => {
      if (isNaN(index) || index === " ") {
        output.push(index);
      } else {
        let letter = alphabet[index];
        output.push(letter);
      }
    });
    let encoded = output.join("");
    return encoded;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
