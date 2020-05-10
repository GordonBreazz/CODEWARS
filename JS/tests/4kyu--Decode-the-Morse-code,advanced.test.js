const {
  decodeMorse,
  decodeBits,
} = require("../4kyu--Decode-the-Morse-code,advanced.js")

// Test.describe("Example from description", function(){
//     Test.assertEquals(decodeMorse(decodeBits('1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011')), 'HEY JUDE')
//     })

test('#1 decodeMorse should return "HEY JUDE"', () => {
  expect(
    decodeMorse(
      decodeBits(
        "1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011"
      )
    )
  ).toEqual("HEY JUDE")
})
