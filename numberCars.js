// const englishLetters = "abcdefghijklmnopqrstuvwxyz".split("");
// const numberList = "0123456789".split("");

const addNumberCar = (letters, numbers) => {
  let carNumber = "";
  const carsNumbers = [];

  for (let x = 0; x < letters.length; x++) {
    for (let j = 0; j < letters.length; j++) {
      for (let e = 0; e < numbers.length; e++) {
        for (let w = 0; w < numbers.length; w++) {
          for (let z = 0; z < numbers.length; z++) {
            carNumber =
              letters[x] + letters[j] + numbers[e] + numbers[w] + numbers[z];
            carsNumbers.push(carNumber);
          }
        }
      }
    }
  }

  return carsNumbers;
};

module.exports = addNumberCar;
