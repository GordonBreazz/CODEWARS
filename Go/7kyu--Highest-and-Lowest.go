/***************************************************************************************************************************************************************************************************************************************
*
*     KATA: 7 kyu "Highest and Lowest"
*
*   SOURCE: https://www.codewars.com/kata/554b4ac871d6813a03000035
*   AUTHOR: https://www.codewars.com/users/GordonBreazz
*
*     PLOT: In this little assignment you are given a string of space separated numbers, and have to return
*           the highest and lowest number.
*
*           Example:
*
*              highAndLow("1 2 3 4 5");  // return "5 1"
*              highAndLow("1 2 -3 4 5"); // return "5 -3"
*              highAndLow("1 9 3 4 -5"); // return "9 -5"
*
*           Notes:
*
*           All numbers are valid Int32, no need to validate them.
*           There will always be at least one number in the input string.
*           Output string must be two numbers separated by a single space, and highest number is first.
*
****************************************************************************************************************************************************************************************************************************************/

package kata

import (
	"strconv"
	"strings"
)

func HighAndLow(in string) string {
	// Code here or
	arr := strings.Split(in, " ")
	min, _ := strconv.Atoi(arr[0])
	max := min
	maxst := arr[0]
	minst := maxst
	for i := range arr {
		value, _ := strconv.Atoi(arr[i])
		if value > max {
			max = value
			maxst = arr[i]

		}
		if value < min {
			min = value
			minst = arr[i]
		}

	}
	return maxst + " " + minst
}
