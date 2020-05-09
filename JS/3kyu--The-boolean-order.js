// In this Kata, you will be given boolean values and boolean operators. Your task will be to return the number of arrangements that evaluate to True.
// t,f will stand for true, false and the operators will be Boolean AND (&), OR (|), and XOR (^).

// For example, solve("tft","^&") = 2, as follows:
// "((t ^ f) & t)" = True
// "(t ^ (f & t))" = True
// Notice that the order of the boolean values and operators does not change. What changes is the position of braces.

const solve = function(s, ops) {
    if (s.length !== ops.length + 1) throw Error
    const memo = {t: {t:1, f:0}, f: {t:0, f:1}}

    const calculate = (str, operands) => {
        if (memo.hasOwnProperty(str + operands)) return memo[str + operands]

        let trues = 0
        let falses = 0
        
        for (let i = 0; i < operands.length; i++) {
            let left = calculate(str.slice(0, i + 1), operands.slice(0, i))
            let right = calculate(str.slice(i + 1), operands.slice(i + 1))

            switch (operands[i]) {
                case '&' : {
                    trues += left.t * right.t
                    falses += left.t * right.f + left.f * (right.t + right.f)
                    break
                }
                case '|' : {
                    trues += left.t * (right.t + right.f) + left.f * right.t
                    falses += left.f * right.f
                    break
                }
                case '^': {
                    trues += left.t * right.f + left.f * right.t
                    falses += left.t * right.t + left.f * right.f
                }

            }
        }
        return memo[str + operands] = {t: trues, f: falses}
    }

    return calculate(s, ops).t
}

module.exports = {solve}