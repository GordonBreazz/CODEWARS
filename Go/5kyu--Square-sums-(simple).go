/***************************************************************************************************************************************************************************************************************************************
*
*     KATA: 5 kyu "Square sums (simple)"
*
*   SOURCE: https://www.codewars.com/kata/5a6b24d4e626c59d5b000066
*   AUTHOR: https://www.codewars.com/users/GordonBreazz
*
*     PLOT: This is simple version of harder Square Sums.
*
*           Square sums
*           Write function square_sums_row ( or squareSumsRow or SquareSumsRow ) that, given integer number N (in range 2..43), returns array of integers 1..N arranged in a way, so sum of each 2 consecutive numbers is a square.
*
*           Solution is valid if and only if following two criterias are met:
*
*           Each number in range 1..N is used once and only once.
*           Sum of each 2 consecutive numbers is a perfect square.
*           Example
*           For N=15 solution could look like this:
*
*           [ 9, 7, 2, 14, 11, 5, 4, 12, 13, 3, 6, 10, 15, 1, 8 ]
*
*           Verification
*           All numbers are used once and only once. When sorted in ascending order array looks like this:
*           [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ]
*
*           Sum of each 2 consecutive numbers is a perfect square:
*              16    16     16     16     16     16     16
*              /+\   /+\    /+\    /+\    /+\    /+\    /+\
*           [ 9, 7, 2, 14, 11, 5, 4, 12, 13, 3, 6, 10, 15, 1, 8 ]
*                 \+/    \+/    \+/    \+/    \+/    \+/    \+/
*                  9     25      9     25      9     25      9
*
*            9 = 3*3
*           16 = 4*4
*           25 = 5*5
*           If there is no solution, return false ( None in Scala, Nothing in Haskell ). For example if N=5, then numbers 1,2,3,4,5 cannot be put into square sums row: 1+3=4, 4+5=9, but 2 has no pairs and cannot link [1,3] and [4,5].
*
*           Have fun!
*           Harder version of this Kata is here https://www.codewars.com/kata/square-sums.
*
*
****************************************************************************************************************************************************************************************************************************************/

package kata

var squares = []int{100, 81, 64, 49, 36, 25, 16, 9, 4}

func search(cur, n int, result []int) []int {
	if len(result) == n {
		return result
	}

	for _, el := range squares {
		p := el - cur
		if 1 > p || p > n {
			continue
		}
		fl := true
		for _, item := range result {
			if item == p {
				fl = false
				break
			}
		}
		if fl {
			arr := search(p, n, append(result[:], p))
			if arr != nil {
				return arr
			}
		}
	}
	return nil
}

func SquareSumsRow(n int) []int {
	for i := 1; i < n; i++ {
		arr := search(i, n, append(make([]int, 0, n), i))
		if arr != nil {
			return arr
		}
	}
	return nil
}
