const { divisors } = require("../7kyu--Count-the-divisors-of-a-number.ts")

describe('"Count the divisors of a number" tests:', function () {
    test("#1", () => {
      expect(divisors(1)).toEqual(1)
    })
    test("#2", () => {
      expect(divisors(10)).toEqual(4)
    })
    test("#3", () => {
      expect(divisors(11)).toEqual(2)
    })  
    test("#4", () => {
      expect(divisors(54)).toEqual(8)
    })  
    test("#5", () => {
      expect(divisors(64)).toEqual(7)
    })  
  })