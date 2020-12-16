/***************************************************************************************************************************************************************************************************************************************
*
*     KATA: 6 kyu "Backspaces in string"
*
*   SOURCE: https://www.codewars.com/kata/5727bb0fe81185ae62000ae3
*   AUTHOR: https://www.codewars.com/users/GordonBreazz
*
*
*     PLOT: Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"
*
*           Your task is to process a string with "#" symbols.
*
*           Examples
*              "abc#d##c"      ==>  "ac"
*              "abc##d######"  ==>  ""
*              "#######"       ==>  ""
*              ""              ==>  ""
*
***************************************************************************************************************************************************************************************************************************************/

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
