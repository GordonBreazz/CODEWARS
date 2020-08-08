/***********************************************************************************************************************************************************
 *     KATA: 6 kyu "IQ Test"
 *   Source: https://www.codewars.com/kata/552c028c030765286c00007d
 *   Author: https://www.codewars.com/users/GordonBreazz
 *
 *     PLOT: Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the
 *           given numbers differs from the others. Bob observed that one number usually differs from the others in
 *           evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that
 *           is different in evenness, and return a position of this number.
 *
 *           ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)
 *
 *           ##Examples :
 *             iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even*
 *             iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd
 *
 ************************************************************************************************************************************************************/
export function iqTest(numbers: string): number {
  const arr: number[] = numbers.split(" ").map((item) => Number(item))
  let even: number = 0
  let notEven: number = 0
  let ep: number = 0
  let nep: number = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      even++
      ep = i
    } else {
      notEven++
      nep = i
    }
    if (even > 1 && notEven == 1) return nep + 1
    if (notEven > 1 && even == 1) return ep + 1
  }
}
