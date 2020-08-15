/***************************************************************************************************************************************************************************************************************************************
 *
 *     KATA: 6 kyu "Consecutive strings"
 *
 *   SOURCE: https://www.codewars.com/kata/56a5d994ac971f1ac500003e
 *   AUTHOR: https://www.codewars.com/users/GordonBreazz
 *
 *     PLOT: You are given an array(list) strarr of strings and an integer k. Your task is to return the first
 *           longest string consisting of k consecutive strings taken in the array.
 *
 *           Example:
 *             longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"*
 *             n being the length of the string array, if n = 0 or k > n or k <= 0 return "".
 *
 *           Note
 *             consecutive strings : follow one after another without an interruption
 *
 ****************************************************************************************************************************************************************************************************************************************/

export function longestConsec(strarr: string[], k: number): string {
  if (strarr.length == 0 || k > strarr.length || k <= 0) return ""
  const arr: number[] = strarr.map((item) => item.length)
  let max: number = 0
  let maxindex: number = -1
  let sum: number = 0
  for (let j = 0; j < arr.length - k + 1; j++) {
    sum = arr[j]
    for (let i = 1; i < k; i++) sum += arr[j + i]
    if (sum > max) {
      max = sum
      maxindex = j
    }
  }
  return strarr.slice(maxindex, maxindex + k).join("")
}
