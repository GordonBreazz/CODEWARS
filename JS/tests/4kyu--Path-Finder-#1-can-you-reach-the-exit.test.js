const { pathFinder } = require("../4kyu--Path-Finder-#1-can-you-reach-the-exit.js")

describe('"Path Finder *1: can you reach the exit?" tests:', function () {
    describe('Basic tests:', function () {
        test("#1", () => {
            expect(pathFinder( '.W.' + '\n' +
                               '.W.' + '\n' +
                               '...')).toEqual(true)
          })

          test("#2", () => {
            expect(pathFinder( '.W.' + '\n' +
                               '.W.' + '\n' +
                               'W..')).toEqual(false)
          })

          test("#3", () => {
            expect(pathFinder( '......' + '\n' +
                               '......' + '\n' +
                               '......' + '\n' +
                               '......' + '\n' +
                               '......' + '\n' +                                                                                             
                               '......')).toEqual(true)
          })

          test("#4", () => {
            expect(pathFinder( '......' + '\n' +
                               '......' + '\n' +
                               '......' + '\n' +
                               '......' + '\n' +
                               '.....W' + '\n' +                                                                                             
                               '....W.')).toEqual(false)
          })                    
    })    
})

