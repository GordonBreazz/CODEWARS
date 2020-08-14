const { domainName } = require("../5kyu--Extract-the-domain-name-from-a-URL.js")

describe('"Extract the domain name from a URL:', function () {
    test("#1", () => {
      expect(domainName("http://google.com")).toEqual('google')
    })

    test("#1", () => {
      expect(domainName("http://google.co.jp")).toEqual('google')
    })

    test("#1", () => {
      expect(domainName("www.xakep.ru")).toEqual('xakep')
    })

    test("#1", () => {
      expect(domainName("https://youtube.com")).toEqual('youtube')
    })



  })