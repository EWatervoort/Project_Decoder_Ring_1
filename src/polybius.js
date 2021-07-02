// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const alphabet = [
    ["a", "b", "c", "d", "e"],
    ["f", "g", "h", "i/j", "k"],
    ["l", "m", "n", "o", "p"],
    ["q", "r", "s", "t", "u"],
    ["v", "w", "x", "y", "z"],
  ];

  function polybius(input, encode = true) {
    if (!encode) {
      let noSpaces = input.split(" ").join("");
      if (noSpaces.length % 2 !== 0) return false;
      let replaceSpaces = input.replace(/ /g, '99')
      let inputNumber = replaceSpaces.split("")
      let coordinates = []
      for( let i = 0; i < inputNumber.length; i+= 2) {
        coordinates.push(inputNumber.slice(i, i+2));
      };
      let message = []
      coordinates.forEach(coordinate => {
        let rowBaseZero = coordinate[1] - 1
        let indexBaseZero = coordinate[0] -1
        if (indexBaseZero === 3 && rowBaseZero === 1) {
          message.push('(i/j)')
        } else if (rowBaseZero === 8 || indexBaseZero === 8) {
          message.push(9)
        } else {
          let letter = alphabet[rowBaseZero][indexBaseZero]
          message.push(letter)
        }
      });
      let decoded = message.join('');
      let addSpaces = decoded.replace(/9/g, ' ')
  
      return addSpaces
    }
  
    let inputCode = input.toLowerCase();
    let inputArray = inputCode.split('');
    let alphabetNumber = [];
    inputArray.forEach(letter => {
      if (letter === 'i' || letter === 'j') {
        alphabetNumber.push(3)
        alphabetNumber.push(1)
      } else if(letter === ' ') {
        alphabetNumber.push(letter)
      } else {
          alphabet.forEach(row => {
            indexB = row.indexOf(letter)
            indexA = alphabet.indexOf(row)
            if (indexB !== -1) {
              alphabetNumber.push(indexB)
              alphabetNumber.push(indexA)
            }
          })
        }
      })
      let polybuisNumber = []
      alphabetNumber.map((number) => {
        if (number === ' ') {
          polybuisNumber.push(number)
        } else {
          number = number + 1
          polybuisNumber.push(number)
        }
      })
      let alphabetString = polybuisNumber.map(number => number.toString())
      let encoded = alphabetString.join('')
  
  return encoded
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
