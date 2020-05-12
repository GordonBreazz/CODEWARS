/*
describe('Some simple multiplications', function() {
    it('simple', function() {
      Test.assertEquals(multiply("2", "3"), "6");
      Test.assertEquals(multiply("-30", "69"), "-2070");
      Test.assertEquals(multiply("11", "85"), "935");
    });
  });
  
  describe('Some corner test multiplications', function() {
    it('simple', function() {
      Test.assertEquals(multiply("-0.00", "0.0000"), "0");
      Test.assertEquals(multiply("-0.01", "0.0000"), "0");
      Test.assertEquals(multiply("2.01", "3.0000"), "6.03");
      Test.assertEquals(multiply("2", "-3.000001"), "-6.000002");
      Test.assertEquals(multiply("-5.0908", "-123.1"), "626.67748");
      Test.assertEquals(multiply("6356.30449648705", "-251085898950138261321305124571969999530899416912306852871061207424"), "-1595978428501256897341899504081194644518151842914999047643075913731210.1393798592");
  
    });
  });
*/
const {
  multiply,
} = require("../3kyu--Multiplying-numbers-as-strings---Part-II.js")

describe("3 kyu Multiplying numbers as strings: Part II test", function () {
  test("#1 Some simple multiplications", () => {
    expect(multiply("2", "3")).toEqual("6")
  })

  test("#2 Some simple multiplications", () => {
    expect(multiply("-30", "69")).toEqual("-2070")
  })

  test("#3 Some simple multiplications", () => {
    expect(multiply("11", "85")).toEqual("935")
  })

  test("#4 Some corner test multiplications", () => {
    expect(multiply("-0.00", "0.0000")).toEqual("0")
  })

  test("#5 Some corner test multiplications", () => {
    expect(multiply("-0.01", "0.0000")).toEqual("0")
  })

  test("#6 Some corner test multiplications", () => {
    expect(multiply("2.01", "3.0000")).toEqual("6.03")
  })
  
  test("#7 Some corner test multiplications", () => {
    expect(multiply("2", "-3.000001")).toEqual("-6.000002")
  })

  test("#8 Some corner test multiplications", () => {
    expect(multiply("-5.0908", "-123.1")).toEqual("626.67748")
  })

  test("#9 Some corner test multiplications", () => {
    expect(multiply("6356.30449648705", "-251085898950138261321305124571969999530899416912306852871061207424")).toEqual("-1595978428501256897341899504081194644518151842914999047643075913731210.1393798592")
  })  
})
