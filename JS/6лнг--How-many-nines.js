function nines(n) {
    if (n < 10n) return n == 9 ? 1n : 0n
    let str = String(n)
    let len = BigInt(str.length - 1)
    let head = BigInt(str[0])
    let tail = BigInt(str.slice(1))
    let recur = head == 9 ? tail + 1n : nines(tail)
    let f = n => n == 1 ? 1n : 10n ** (--n) + 9n * f(n)
    return head * f(len) + recur
}