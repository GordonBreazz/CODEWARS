const { Kata } = require("../7kyu--Disemvowel-Trolls.ts")

describe("Fake Binary tests:", function () {
    test("#1", () => {
      expect(fakeBin('45385593107843568')).toEqual('01011110001100111')
    })
    test("#2", () => {
      expect(fakeBin('509321967506747')).toEqual('101000111101101')
    })
    test("#3", () => {
      expect(fakeBin('366058562030849490134388085')).toEqual('011011110000101010000011011')
    })  
  })