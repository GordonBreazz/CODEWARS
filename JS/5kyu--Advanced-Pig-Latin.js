/***********************************************************************************************************************************************************
 *     KATA: 5 kyu "Advanced Pig Latin"
 *   Source: https://www.codewars.com/kata/533c46b140aafec05b000d31
 *   Author: https://www.codewars.com/users/GordonBreazz
 *
 *     PLOT: Pig latin is created by taking all the consonants before the first vowel of a word and
 *           moving them to the back of the word followed by the letters "ay".
 *
 *               "hello" => "ellohay"
 *               "creating" => "eatingcray"
 *
 *           If the first letter of the word is a vowel, the string is left the same and the
 *           letters "way" are appended to the end.
 *
 *               "algorithm" => "algorithmway"
 *
 *           This problem is different from other variations in that it expects casing to remain
 *           the same so:
 *
 *               "Hello World" => "Ellohay Orldway"
 *
 *           as well as punctuation.
 *
 *           "Pizza? Yes please!" => "Izzapay? Esyay easeplay!"
 *
 *           Your job is to take a string and translate it to Pig Latin. The string will never be
 *           undefined but may contain both numbers and letters. A word will never be a combination
 *           of numbers and letters. Also, there will never be punctuation at the beginning of a word
 *           and the only capital letter in a word will be the first letter meaning there are zero all
 *           capitalized words.
 *
 ***************************************************************************************************************************************************************************************************************************************/

function translate(sentence) {
  //Convert the sentence to Pig Latin!
  // or should I say...
  //Onvertcay ethay entencesay otay Igpay Atinlay!
  let words = sentence.split(" ")
  let vowel = /^[AEIOUJ]/i
  let consonants = /^[BCDFGHKLMNPQRSTVWXYJZ]*/i

  words.forEach(function (item, index, arr) {
    if (vowel.test(item) == true) {
      let res = item.match(vowel)
      arr[index] =
        item.replace(/[?!.]/g, "") + "way" + item.replace(/[a-z]/gi, "")
      arr[index] = arr[index].toLowerCase()
      if (res[0][0] == res[0][0].toUpperCase())
        arr[index] = arr[index][0].toUpperCase() + arr[index].substring(1)
    } else if (consonants.test(item) == true) {
      let res = item.match(consonants)
      arr[index] =
        item.replace(/[?!.]/g, "").replace(consonants, "") +
        res +
        "ay" +
        item.replace(/[a-z]/gi, "")
      arr[index] = arr[index].toLowerCase()
      if (res[0][0] == res[0][0].toUpperCase())
        arr[index] = arr[index][0].toUpperCase() + arr[index].substring(1)
    }
  })
  return words.join(" ")
}

module.exports = { translate }

