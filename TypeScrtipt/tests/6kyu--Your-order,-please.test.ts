import  { order } = from "../6kyu--Your-order,-please.ts"

describe('"Your order, please" tests:', function () {
    test("#1", () => {
      expect(order("is2 Thi1s T4est 3a")).toEqual("Thi1s is2 3a T4est")
    })
    test("#2", () => {
      expect(order("4of Fo1r pe6ople g3ood th5e the2")).toEqual("Fo1r the2 g3ood 4of th5e pe6ople")
    })
    test("#3", () => {
      expect(order("")).toEqual("")
    })
})