/********************************************************************************************************************************************************************************************************************************************
 *
 *     KATA: 5 kyu "Typoglycemia Generator"
 *   Source: https://www.codewars.com/kata/55953e906851cf2441000032
 *   Author: https://www.codewars.com/users/GordonBreazz
 *
 *     PLOT: Background
 *            There is a message that is circulating via public media that claims a reader can easily read a message where
 *            the inner letters of each words is scrambled, as long as the first and last letters remain the same and the word
 *            contains all the letters.
 *
 *            Another example shows that it is quite difficult to read the text where all the letters are reversed rather
 *            than scrambled.
 *
 *            In this kata we will make a generator that generates text in a similar pattern, but instead of scrambled or reversed,
 *            ours will be sorted alphabetically
 *
 *            Requirement
 *            return a string where:
 *
 *                1) the first and last characters remain in original place for each word
 *                2) characters between the first and last characters must be sorted alphabetically
 *                3) punctuation should remain at the same place as it started, for example: shan't -> sahn't
 *
 *            Assumptions
 *
 *                1) words are seperated by single spaces
 *                2) only spaces separate words, special characters do not, for example: tik-tak -> tai-ktk
 *                3) special characters do not take the position of the non special characters, for example: -dcba -> -dbca
 *                4) for this kata puctuation is limited to 4 characters: hyphen(-), apostrophe('), comma(,) and period(.)
 *                5) ignore capitalisation
 *
 *            for reference: http://en.wikipedia.org/wiki/Typoglycemia
 *
 ********************************************************************************************************************************************************************************************************************************************/

const alphabetSymbol = (x) =>
  x.toLowerCase().charCodeAt(0) >= 97 && x.toLowerCase().charCodeAt(0) <= 122

const ScrambleWords = function (str) {
  //start here
  return str
    .split(" ")
    .map(function (item) {
      let first = 0,
        last = 0,
        k = 0,
        arr = item.split("")
      for (let i = 0; i < arr.length; i++)
        if (alphabetSymbol(arr[i])) {
          first = i + 1
          break
        }
      for (let i = arr.length - 1; i >= 0; i--)
        if (alphabetSymbol(arr[i])) {
          last = i
          break
        }

      let dic = item
        .slice(first, last)
        .split("")
        .filter((x) => alphabetSymbol(x))
        .sort()
      for (let i = first; i < last; i++)
        if (alphabetSymbol(arr[i])) arr[i] = dic[k++] // Take a joke ))
      return arr.join("")
    })
    .join(" ")
}

module.exports = { ScrambleWords }
