// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  cconst alphabet = [
    ['a','b','c','d','e'],
    ['f','g','h','i/j','k'],
    ['l','m','n','o','p'],
    ['q','r','s','t','u'],
    ['v','w','x','y','z']
  ]
  
  function polybius(input, encode = true) {
    if (!encode) {
      let noSpaces = input.split(" ").join("");
      if (noSpaces.length % 2 !== 0) return false;
    }
  
    let inputCode = input.toLowerCase();
    let inputArray = inputCode.split('');
    let alphabetNumber = [];
    inputArray.forEach(letter => {
      alphabet.forEach(row => {
        indexB = row.indexOf(letter)
        indexA = alphabet.indexOf(row)
        if (indexB !== -1) {
          alphabetNumber.push(indexA)
          alphabetNumber.push(indexB)
          }
        })
      })
      let polybuisNumber = alphabetNumber.map((number) => number = number + 1)
      let alphabetString = polybuisNumber.map(number => number.toString())
      let encoded = alphabetString.join('')
  
  return encoded
    }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
