const { alphabetWar } = require("../7kyu--Alphabet-war.js")

describe('"Alphabet war" tests:', function () {
    // Should correctly expand binomials where a=1 and b is positive
    test("#1", () => {
      expect(alphabetWar("z")).toEqual("Right side wins!")
    })

    test("#2", () => {
        expect(alphabetWar("zdqmwpbs")).toEqual("Let's fight again!")
    })

    test("#3", () => {
        expect(alphabetWar("zzzzs")).toEqual("Right side wins!")
    })

    test("#4", () => {
        expect(alphabetWar("wwwwww")).toEqual("Left side wins!")
    })    
  
})    