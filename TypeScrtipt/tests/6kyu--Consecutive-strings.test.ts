const { longestConsec } = require("../6kyu--Consecutive-strings.ts")

describe('"Consecutive strings" tests:', function () {
    test("#1", () => {
      expect(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)).toEqual("abigailtheta")
    })
    
    test("#2", () => {
      expect(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1)).toEqual("oocccffuucccjjjkkkjyyyeehh")
    })

    test("#3", () => {
      expect(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3)).toEqual("ixoyx3452zzzzzzzzzzzz")
    })

  })