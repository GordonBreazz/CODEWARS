const { partitionOn } = require("../5kyu--Partition-On.js")
let items = [1, 2, 3, 4, 5, 6];
function isEven(n) {return n % 2 == 0}
let i = partitionOn(isEven, items)

describe('"Partition On" tests:', function () {
    test("#1", () => {
      expect( items.slice(0, i)).toEqual([1, 3, 5])
    })  
    test("#2", () => {
      expect(items.slice(i)).toEqual([2, 4, 6])
    })  
})