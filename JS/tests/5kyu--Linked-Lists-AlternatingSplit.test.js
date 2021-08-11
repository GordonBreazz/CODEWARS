const { alternatingSplit } = require("../5kyu--Linked-Lists-AlternatingSplit.js")

function Context(first, second) {
    this.first = first;
    this.second = second;
  }

const list = {
          data: 1, 
          next: {
              data: 2, 
              next: {
                  data: 3, 
                  next: {
                      data: 4, 
                      next: {
                          data: 5, 
                          next: {
                              data: 6, 
                              next: null
                           }
                       }
                   }
               }
           }
       },
       first = {
           data: 1, 
           next: {
               data: 3,
               next: {
                   data: 5,
                   next: null
               }
           }
       },
       second = {
           data: 2,
           next: {
               data: 4,
               next: {
                   data: 6,
                   next: null
               }
           }
       }

describe('"Linked Lists - Alternating Split" tests:', function () {
    test("#1", () => {
        expect(alternatingSplit(list)).toEqual(new Context(first, second))
      })    
})    