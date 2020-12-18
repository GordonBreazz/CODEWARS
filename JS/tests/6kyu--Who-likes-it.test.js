const { likes } = require("../6kyu--Who-likes-it.js")

describe('"Who likes it?" tests:', function () {
    test("#1", () => {
        expect(likes([])).toEqual('no one likes this')
    })
    test("#2", () => {
        expect(likes(['Peter'])).toEqual('Peter likes this')
    })
    test("#3", () => {
        expect(likes(['Jacob', 'Alex'])).toEqual('Jacob and Alex like this')
    })
    test("#4", () => {
        expect(likes(['Max', 'John', 'Mark'])).toEqual('Max, John and Mark like this')
    })
    test("#5", () => {
        expect(likes(['Alex', 'Jacob', 'Mark', 'Max'])).toEqual('Alex, Jacob and 2 others like this')
    })
})    