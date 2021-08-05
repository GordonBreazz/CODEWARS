const { pathFinder } = require("../4kyu--Path-Finder-#2-shortest-path.js")
const testCases = [
    {  maze: 
`.W.
.W.
...`,
       answer: 4
    },
    {  maze: 
`.W.
.W.
W..`,
        answer: false
    },
    {   maze: 
`......
......
......
......
......
......`,
        answer: 10
    },
    {   maze: 
`......
......
......
......
.....W
....W.`,
        answer: false}
]

describe('"Path Finder #2: shortest path" tests:', function () {
    test.each(testCases)('Test #%#:',({maze, answer}) =>{
        expect(pathFinder(maze)).toEqual(answer)
    })
})