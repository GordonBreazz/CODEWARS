const { stockList } = require("../6kyu--Help-the-bookseller.js")

describe('"Help the bookseller !" tests:', function () {
    test("#1", () => {
        const b = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"]
        const c = ["A", "B"]
        const res = "(A : 200) - (B : 1140)"
        expect(stockList(b, c)).toEqual(res)
    })
    test("#2", () => {
        const b = ["CBART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"]
        const c = ["A", "B", "C", "W"]
        const res = "(A : 0) - (B : 114) - (C : 70) - (W : 0)"
        expect(stockList(b, c)).toEqual(res)
    })
})   