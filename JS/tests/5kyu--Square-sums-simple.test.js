const { square_sums_row } = require("../5kyu--Square-sums-simple.js")

describe('No solution', function () {
    test("#1", () => {
        expect(square_sums_row(2)).toEqual(false)
    })    
    test("#5", () => {
        expect(square_sums_row(2)).toEqual(false)
    })    
    test("#14", () => {
        expect(square_sums_row(2)).toEqual(false)
    })    
})

function testList(arr) {
    const square = [100, 81, 64, 49, 36, 25, 16, 9, 4]
    for (let i = 1; i < arr.length - 1; i++)
        if (!square.includes(arr[i] + arr[i - 1])) return false
    return true
}

describe('Verify sequences', function () {
    test("#1", () => {
        expect( testList( square_sums_row(15) ) ).toEqual(true)
    })    
    test("#5", () => {
        expect( testList( square_sums_row(23) ) ).toEqual(true)
    })    
    test("#14", () => {
        expect( testList( square_sums_row(25) ) ).toEqual(true)
    })    
})