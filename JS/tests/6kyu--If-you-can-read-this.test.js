const { to_nato } = require("../6kyu--If-you-can-read-this.js")

describe('"If you can read this..." tests:', function () {
    test("#1", () => {
        expect(to_nato('If you can read')).toEqual('India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta')
    })
    test("#1", () => {
        expect(to_nato('Did not see that coming')).toEqual('Delta India Delta November Oscar Tango Sierra Echo Echo Tango Hotel Alfa Tango Charlie Oscar Mike India November Golf')
    })
    test("#1", () => {
        expect(to_nato('go for it!')).toEqual('Golf Oscar Foxtrot Oscar Romeo India Tango !')
    })
})
