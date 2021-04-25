package kata

import "fmt"

func VertMirror(s string) string {
	// your code
	var result, st string
	fmt.Println(s)
	for i := 0; i < len(s); i++ {
		if s[i] == '\n' {
			result += st
		} else {
			st = string(s[i])
		}
		fmt.Println(string(s[i]))
	}
	return result
}
func HorMirror(s string) string {
	// your code
	return ""
}

type FParam func(string) string

func Oper(f FParam, x string) string {
	// your code
	return f(x)
}
