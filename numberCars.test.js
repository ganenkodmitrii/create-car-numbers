const addNumberCar = require("./numberCars");

const englishLetters = "abcdefghijklmnopqrstuvwxyz".split("");
const numberList = "0123456789".split("");

const numberCars = addNumberCar(englishLetters, numberList);

it("Include aa111", () => {
  expect(numberCars[0].includes("a0a0a")).toBe(true);
});

it("Has a length", () => {
  expect(numberCars.length > 0).toBe(true);
});

it(`Has a length of 5 ${numberCars.length}`, () => {
  expect(numberCars.length === 5).toBe(false);
});
