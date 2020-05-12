/*
describe("Basic Tests", function(){
    it("It should works for basic tests.", function(){
    
    Test.assertEquals(checkRange([2, 5, 6, 7, 1, 3, 4, 11, 56, 49],1,7),7)
    
    Test.assertEquals(checkRange([2, 5, 6, 7, 1, 3, 4, 11, 56, 49],3,5),3)
    
    Test.assertEquals(checkRange([2, 5, 6, 7, 1, 3, 4, 11, 56, 49],7,10),1)
    
    Test.assertEquals(checkRange([7, 5, 11, 8, 9, 1, 13, 12, 88],99,100),0)
    
    Test.assertEquals(checkRange([12, 1, 45, 56, 98, 14, 23, 46],14,14),1)
    
    Test.assertEquals(checkRange([1, 1, 1, 99, 99, 99],88,88),0)
    
    })})
*/
const {checkRange} = require('../3kyu--One-Line-Task---Check-Range.js')

describe('3kyu One Line Task: Check Range.test', function() {
    test('#1', () => {
        expect( checkRange([2, 5, 6, 7, 1, 3, 4, 11, 56, 49],1,7) ).toEqual(7) 
    })
    test('#2', () => {
        expect( checkRange([2, 5, 6, 7, 1, 3, 4, 11, 56, 49],3,5) ).toEqual(3) 
    })
    test('#3', () => {
        expect( checkRange([2, 5, 6, 7, 1, 3, 4, 11, 56, 49],7,10) ).toEqual(1) 
    })
    test('#4', () => {
        expect( checkRange([7, 5, 11, 8, 9, 1, 13, 12, 88],99,100) ).toEqual(0) 
    })
    test('#5', () => {
        expect( checkRange([12, 1, 45, 56, 98, 14, 23, 46],14,14) ).toEqual(1) 
    })
    test('#6', () => {
        expect( checkRange([1, 1, 1, 99, 99, 99],88,88) ).toEqual(0) 
    })
})
