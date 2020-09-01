const { createSpiral } = require('../5kyu--The-Clockwise-Spiral.js')

describe('"The Clockwise Spiral" tests', function() {
    test('#1', () => {
        expect(JSON.stringify(createSpiral(1))).toEqual("[[1]]") 
    })
    test('#2', () => {
        expect(JSON.stringify(createSpiral(3))).toEqual("[[1,2,3],[8,9,4],[7,6,5]]") 
    })
    test('#3', () => {
        expect(JSON.stringify(createSpiral(4))).toEqual("[[1,2,3,4],[12,13,14,5],[11,16,15,6],[10,9,8,7]]") 
    })
    test('#4', () => {
        expect(JSON.stringify(createSpiral(5))).toEqual("[[1,2,3,4,5],[16,17,18,19,6],[15,24,25,20,7],[14,23,22,21,8],[13,12,11,10,9]]") 
    })
});