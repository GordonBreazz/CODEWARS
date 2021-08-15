/***************************************************************************************************************************************************************************************************************************************
*
*     KATA: 6 kyu "Multiples of 3 or 5"
*
*   SOURCE: https://www.codewars.com/kata/514b92a657cdc65150000006
*   AUTHOR: https://www.codewars.com/users/GordonBreazz
*
*     PLOT: If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
*           The sum of these multiples is 23.
*
*           Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).
*
*           Note: If the number is a multiple of both 3 and 5, only count it once.
*
****************************************************************************************************************************************************************************************************************************************/

package kata

func Multiple3And5(number int) int {
	five, three, sum := 0, 0, 0
	for three < number {
		sum += three
		three += 3
	}
	for five < number {
		if five%3 != 0 {
			sum += five
		}
		five += 5
	}
	return sum
}
