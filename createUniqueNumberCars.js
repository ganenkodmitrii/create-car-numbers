const addUniqueNumberCar = (letters, numbers) => {
  let carNumber = "";
  const carsNumbers = [];

  for (let x = 0; x < letters.length; x++) {
    for (let j = 0; j < letters.length; j++) {
      if (letters[x] !== letters[j]) {
        for (let e = 0; e < numbers.length; e++) {
          for (let w = 0; w < numbers.length; w++) {
            for (let z = 0; z < numbers.length; z++) {
              if (
                numbers[e] !== numbers[w] &&
                numbers[e] !== numbers[z] &&
                numbers[z] !== numbers[w]
              ) {
                carNumber =
                  letters[x] +
                  letters[j] +
                  numbers[e] +
                  numbers[w] +
                  numbers[z];
                carsNumbers.push(carNumber);
              }
            }
          }
        }
      }
    }
  }

  return carsNumbers;
};

module.exports = addUniqueNumberCar;
