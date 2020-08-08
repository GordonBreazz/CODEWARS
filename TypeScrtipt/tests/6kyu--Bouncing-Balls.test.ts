const { bouncingBall } = require("../6kyu--Bouncing-Balls.test.ts")

describe('"Bouncing Balls" tests:', function () {
    test("#1", () => {
      expect(bouncingBall(3.0, 0.66, 1.5)).toEqual(3)
    })
    test("#2", () => {
      expect(bouncingBall(30.0, 0.66, 1.5)).toEqual(15)
    })
    test("#3", () => {
      expect(bouncingBall(30, 0.75, 1.5)).toEqual(21)
    })  
    test("#4", () => {
      expect(bouncingBall(30, 0.4, 10)).toEqual(3)
    })  
  })