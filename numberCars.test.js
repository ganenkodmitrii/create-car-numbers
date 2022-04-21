const sum = require("./numberCars");

test("adds letter and number ", () => {
  expect(sum(["c"], ["0", "1"])).toBe([
    "cc000",
    "cc010",
    "cc011",
    "cc111",
    "cc101",
    "cc001",
  ]);
});
