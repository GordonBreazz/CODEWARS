const { permutations } = require("../4kyu--Permutations.js")

describe('"Permutations" kata tests:', function () {
    test("#1", () => {
      expect(permutations('a')).toEqual( ['a'])
    })

    test("#2", () => {
      expect(permutations('ab')).toEqual(['ab', 'ba'].sort())
    })

    test("#3", () => {
      expect(permutations('aabb')).toEqual( ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'].sort())
    })

  })