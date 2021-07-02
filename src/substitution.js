// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  const originalAlphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  function substitution(input, alphabet, encode = true) {
    let codeAlphabet = alphabet.toLowerCase().split("");
    let normalAlphabet = originalAlphabet;

    let alphabetCheck = codeAlphabet.reduce((tally, character) => {
      tally[character] = (tally[character] || 0) + 1;
      return tally;
    }, {});
    let alphabetValue = Object.values(alphabetCheck);
    let repeatNumberFilter = alphabetValue.filter((number) => number === 1);
    if (alphabet.length !== 26 || repeatNumberFilter.length !== 26) {
      return false;
    }

    if (!encode) {
      normalAlphabet = alphabet;
      codeAlphabet = originalAlphabet;
    }

    inputCode = input.toLowerCase();
    inputArray = inputCode.split("");

    let alphabetNumber = [];
    inputArray.forEach((letter) => {
      let index = normalAlphabet.indexOf(letter);
      if (index === -1) {
        alphabetNumber.push(letter);
      } else {
        alphabetNumber.push(index);
      }
    });

    let encoding = [];
    alphabetNumber.forEach((index) => {
      let letter = codeAlphabet[index];
      if (!letter) {
        encoding.push(index);
      } else {
        encoding.push(letter);
      }
    });
    let encoded = encoding.join("");
    return encoded;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
