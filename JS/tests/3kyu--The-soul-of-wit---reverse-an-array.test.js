/*
const codeSize = require('fs').statSync('/home/codewarrior/solution.txt').size;
Test.display.log(codeSize, {label: 'Code size'});

Test.describe('reverse', () => {
  Test.it('should reverse arrays', () => {
    Test.assertDeepEquals(reverse([1, 2, 3]), [3, 2, 1]);
    Test.assertDeepEquals(reverse([...'01234567890123456789']), [...'98765432109876543210']);
  });
});

Test.describe('Code', () => {
  Test.it('should be short enough', () => {
    const codeSize = require('fs').statSync('/home/codewarrior/solution.txt').size;
    Test.expect(codeSize <= 30, 'Code is too long');
  });
  Test.it('should not use `require`', () => {
    const code = module.require('fs').readFileSync('/home/codewarrior/solution.txt');
    Test.expect(!code.includes('require'), 'Code uses `require`');
  });
});
*/

const { reverse } = require("../3kyu--The-soul-of-wit---reverse-an-array.js")

describe("3 kyu The soul of wit: reverse an array test", function () {
  const codeSize = 30
  test("#1", () => {
    expect(reverse([1, 2, 3])).toEqual([3, 2, 1])
  })
  test("#2", () => {
    expect(reverse([...'01234567890123456789'])).toEqual([...'98765432109876543210'])
  })
})
