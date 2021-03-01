const { alphabetWar } = require("../6kyu--Alphabet-war-airstrike-letters-massacre.js")

describe('"Alphabet war" tests:', function () {
    test("#1", () => {
      expect(alphabetWar("s*zz")).toEqual("Right side wins!")
    })

    test("#2", () => {
        expect(alphabetWar("*zd*qm*wp*bs*")).toEqual("Let's fight again!")
    })

    test("#3", () => {
        expect(alphabetWar("zzzz*s*")).toEqual("Right side wins!")
    })

    test("#4", () => {
        expect(alphabetWar("www*www****z")).toEqual("Left side wins!")
    })    
  
})    