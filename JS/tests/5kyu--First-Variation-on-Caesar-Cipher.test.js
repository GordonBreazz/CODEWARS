const { movingShift, demovingShift } = require("../5kyu--First-Variation-on-Caesar-Cipher.js")

describe('"First Variation on Caesar Cipher" tests:', function () {
    var u = "I should have known that you would have a perfect answer for me!!!"
    var v = ["J vltasl rlhr ", "zdfog odxr ypw", " atasl rlhr p ", "gwkzzyq zntyhv", " lvz wp!!!"]
    test("#1", () => {
        expect(movingShift(u, 1)).toEqual(v)
    })
    test("#2", () => {
        expect(demovingShift(v, 1)).toEqual(u)
    })
}) 