const { simplify } = require("../4kyu--Simplifying-multilinear-polynomials.js")


describe("Simplifying multilinear polynomials tests. Test reduction by equivalence:", function () {
    test("#1", () => {
      expect(simplify("-14ab+3azb+6ab+5bza+2ba-10a")).toEqual("-10a-6ab+8abz")
    })
  
    test("#2", () => {
      expect(simplify("dc+dcba")).toEqual("cd+abcd")
    })
  
    test("#3", () => {
      expect(simplify("2xy-yx")).toEqual("xy")
    })
  
    test("#4", () => {
      expect(simplify("-a+5ab+3a-c-2a")).toEqual("-c+5ab")
    })  
  })

 describe("Simplifying multilinear polynomials tests. Test monomial length ordering:", function () {
    test("#1", () => {
      expect(simplify("-abc+3a+2ac")).toEqual("3a+2ac-abc")
    })
  
    test("#2", () => {
      expect(simplify("xyz-xz")).toEqual("-xz+xyz")
    })
 })  

 describe("Simplifying multilinear polynomials tests. Test lexicographic ordering:", function () {
    test("#1", () => {
      expect(simplify("a+ca-ab")).toEqual("a-ab+ac")
    })
  
    test("#2", () => {
      expect(simplify("xzy+zby")).toEqual("byz+xyz")
    })
  })

  describe("Simplifying multilinear polynomials tests. Test no leading +", function () {
    test("#1", () => {
      expect(simplify("-y+x")).toEqual("x-y")
    })
  
    test("#2", () => {
      expect(simplify("y-x")).toEqual("-x+y")
    })
  })