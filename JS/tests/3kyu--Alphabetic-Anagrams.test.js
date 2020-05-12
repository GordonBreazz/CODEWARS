const { listPosition } = require("../3kyu--Alphabetic-Anagrams.js")

// Test.describe('Anagram', function() {
//     var testValues = {'A' : 1, 'ABAB' : 2, 'AAAB' : 1, 'BAAA' : 4, 'QUESTION' : 24572, 'BOOKKEEPER' : 10743};
//     it ("Must return appropriate values for known inputs", function() {
//       for (var word in testValues) {
//         if (testValues.hasOwnProperty(word)) {
//           Test.assertEquals(listPosition(word), testValues[word], 'Incorrect list position for: ' + word);
//         }
//       }
//     });
//   });

describe("3kyu. Alphabetic Anagrams test", function () {
  const testValues = [
    ["A", 1],
    ["ABAB", 2],
    ["AAAB", 1],
    ["BAAA", 4],
    ["QUESTION", 24572],
    ["BOOKKEEPER", 10743],
  ]

  test.each(testValues)("myFunc work correctly for %s", (input, output) => {
    expect(listPosition(input)).toBe(output)
  })
})
