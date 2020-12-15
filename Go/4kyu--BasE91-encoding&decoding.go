/***************************************************************************************************************************************************************************************************************************************
* 
*     KATA: 4 kyu "BasE91 encoding & decoding"
*
*   SOURCE: https://www.codewars.com/kata/58a57c6bcebc069d7e0001fe
*   AUTHOR: https://www.codewars.com/users/GordonBreazz
* 
*     PLOT: BasE91 is a method for encoding binary as ASCII characters. It is more efficient than Base64 and needs 91 
*           characters to represent the encoded data.
*           
*           The following ASCII charakters are used:
*           
*           'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
*           '!#$%&()*+,./:;<=>?@[]*           _`{|}~"'
*           Create two functions that encode strings to basE91 string and decodes the other way round.
*           
*           b91encode('test') = 'fPNKd'
*           b91decode('fPNKd') = 'test'
*           
*           b91decode('>OwJh>Io0Tv!8PE') = 'Hello World!'
*           b91encode('Hello World!') = '>OwJh>Io0Tv!8PE'
*           Input strings are valid.
*
****************************************************************************************************************************************************************************************************************************************/

package kata

var b91_enctab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&()*+,./:;<=>?@[]^_`{|}~'" 

func Encode(d []byte) []byte {
  b91_dectab := make( map[rune]int )  
  for i, s := range b91_enctab {    
      b91_dectab[s] = i
  }
  var b, n uint32 = 0, 0 
  var v, result = -1, ""
  for _, ch := range d {
    b = b | uint32(ch) << n
    n = n + 8
    if n > 13 {
      v = int(b & 8191)
      if v > 88 {
        b = b >> 13
        n = n - 13
      } else {
        v = int(b & 16383)
        b = b >> 14
        n = n - 14
      }    
      result = result + string(b91_enctab[v % 91]) + string(b91_enctab[int(v / 91)])
    }
  }
  result = result + string(b91_enctab[b % 91])
  if n > 7 || b > 90 {
	  result = result + string(b91_enctab[int(b / 91)])
  }
  return []byte(result) // do it!
}

func Decode(d []byte) []byte {
  b91_dectab := make( map[rune]int )  
  for i, s := range b91_enctab {    
      b91_dectab[s] = i
  }
  var b, n uint32 = 0, 0 
  var v, result = -1, ""
  for _, ch := range d {
    c, ok := b91_dectab[rune(ch)]
    if !ok {
      continue
    }
    if v < 0 {
      v = c
    } else {
      v = v + c * 91
      b = b | uint32(v) << n
      if (v & 8191) > 88 {
        n = n + 13
      } else {
        n = n + 14
      }
      for {
        result = result + string(b & 255)
        b = b >> 8
        n = n - 8
        if !(n > 7){
          break
        }        
      }
      v = -1
    }
  }
  if v != -1 {
    result = result + string((b | uint32(v) << n) & 255)
  }
  return []byte(result) // do it!
}