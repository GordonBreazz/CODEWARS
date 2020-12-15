#######################################################################################################################################################################################################################################
# 
#     KATA: 4 kyu "BasE91 encoding & decoding"
#
#   SOURCE: https://www.codewars.com/kata/58a57c6bcebc069d7e0001fe
#   AUTHOR: https://www.codewars.com/users/GordonBreazz
# 
#     PLOT: BasE91 is a method for encoding binary as ASCII characters. It is more efficient than Base64 and needs 91 
#           characters to represent the encoded data.
#           
#           The following ASCII charakters are used:
#           
#           'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
#           '!#$%&()#+,./:;<=>?@[]#           _`{|}~"'
#           Create two functions that encode strings to basE91 string and decodes the other way round.
#           
#           b91encode('test') = 'fPNKd'
#           b91decode('fPNKd') = 'test'
#           
#           b91decode('>OwJh>Io0Tv!8PE') = 'Hello World!'
#           b91encode('Hello World!') = '>OwJh>Io0Tv!8PE'
#           Input strings are valid.
#
########################################################################################################################################################################################################################################

b91_enctab = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '#', '$',
    '%', '&', '(', ')', '*', '+', ',', '.', '/', ':', ';', '<', '=',
    '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~', '"'
]

b91_dectab = dict((x, i) for i, x in enumerate(b91_enctab))

def b91decode(strng):
    b, n, v, result = 0, 0, -1, ''
    for i in range(len(strng)):
        if not strng[i] in strng:
            continue
        c = b91_dectab[strng[i]]        
        if v < 0:
            v = c          
        else:
            v += c * 91
            b = b | v << n
            n += 13 if (v & 8191) > 88 else 14
            while True:        
                result += chr(b & 255)
                b = b >> 8
                n -= 8
                if not n > 7:
                    break
            v = -1
    if v != -1:
        result += chr((b | v << n) & 255)        
    return result
    
def b91encode(strng):
    b, n, v, result = 0, 0, -1, ''
    for i in range(len(strng)):
        b = b | ord(strng[i]) << n
        n += 8
        if n > 13:
            v = b & 8191
            if v > 88:
                b = b >> 13
                n -= 13
            else:
                v = b & 16383
                b = b >> 14
                n -= 14
            result += b91_enctab[v % 91] + b91_enctab[v // 91]      
  
    result += b91_enctab[b % 91]
    if n > 7 or b > 90:
        result += b91_enctab[b // 91]            
    return result