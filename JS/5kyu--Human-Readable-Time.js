/***************************************************************************************************************************************************************************************************************************************
 *
 *     KATA: 5 kyu "Human Readable Time"
 *
 *   SOURCE: https://www.codewars.com/kata/52685f7382004e774f0001f7
 *   AUTHOR: https://www.codewars.com/users/GordonBreazz
 *
 *     PLOT: Write a function, which takes a non-negative integer (seconds) as input and returns the time in a
 *           human-readable format (HH:MM:SS)
 *
 *             HH = hours, padded to 2 digits, range: 00 - 99
 *             MM = minutes, padded to 2 digits, range: 00 - 59
 *             SS = seconds, padded to 2 digits, range: 00 - 59
 *
 *           The maximum time never exceeds 359999 (99:59:59)
 *           You can find some examples in the test fixtures.
 *
 ***************************************************************************************************************************************************************************************************************************************/

function humanReadable(seconds) {
  // TODO

  if (seconds === 0) return "00:00:00"

  let h = Math.floor(seconds / 3600)

  seconds = seconds % 3600

  let m = Math.floor(seconds / 60)
  let s = seconds % 60

  if (h < 10) h = "0" + h

  if (m < 10) m = "0" + m

  if (s < 10) s = "0" + s

  return h + ":" + m + ":" + s
}

module.exports = { humanReadable }
