/***************************************************************************************************************************************************************************************************************************************
*
*     KATA: 8 kyu "String repeat"
*
*   SOURCE: https://www.codewars.com/kata/57a0e5c372292dd76d000d7e
*   AUTHOR: https://www.codewars.com/users/GordonBreazz
*
*
*     PLOT: Write a function called repeatStr which repeats the given string string exactly n times.
*
*           repeatStr(6, "I") // "IIIIII"
*           repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
*
****************************************************************************************************************************************************************************************************************************************/

package kata

func RepeatStr(repetitions int, value string) string {
	var result string = ""
	for i := 0; i < repetitions; i++ {
		result += value
	}
	return result
}
