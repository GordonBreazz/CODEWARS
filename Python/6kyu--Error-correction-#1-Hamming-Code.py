#######################################################################################################################################################################################################################################
# 
#     KATA: 6 kyu "Error correction #1 - Hamming Code"
#
#   SOURCE: https://www.codewars.com/kata/5ef9ca8b76be6d001d5e1c3e
#   AUTHOR: https://www.codewars.com/users/GordonBreazz
# 
#     PLOT: Background information
#           The Hamming Code is used to correct errors, so-called bit flips, in data transmissions. Later in the description follows a detailed explanation of how it works.
#           In this Kata we will implement the Hamming Code with bit length 3; this has some advantages and disadvantages:
#           
#           [ + ] It's simple to implement
#           [ + ] Compared to other versions of hamming code, we can correct more mistakes
#           [ - ] The size of the input triples
#           Task 1: Encode function
#           Implement the encode function, using the following steps:
#           
#           convert every letter of the text to its ASCII value;
#           convert ASCII values to 8-bit binary;
#           triple every bit;
#           concatenate the result;
#           For example:
#           
#           input: "hey"
#           --> 104, 101, 121                  // ASCII values
#           --> 01101000, 01100101, 01111001   // binary
#           --> 000111111000111000000000 000111111000000111000111 000111111111111000000111  // tripled
#           --> "000111111000111000000000000111111000000111000111000111111111111000000111"  // concatenated
#           Task 2: Decode function:
#           Check if any errors happened and correct them. Errors will be only bit flips, and not a loss of bits:
#           
#           111 --> 101 : this can and will happen
#           111 --> 11 : this cannot happen
#           Note: the length of the input string is also always divisible by 24 so that you can convert it to an ASCII value.
#           
#           Steps:
#           
#           Split the input into groups of three characters;
#           Check if an error occurred: replace each group with the character that occurs most often, e.g. 010 --> 0, 110 --> 1, etc;
#           Take each group of 8 characters and convert that binary number;
#           Convert the binary values to decimal (ASCII);
#           Convert the ASCII values to characters and concatenate the result
#           For example:
#           
#           input: "100111111000111001000010000111111000000111001111000111110110111000010111"
#           --> 100, 111, 111, 000, 111, 001, ...  // triples
#           -->  0,   1,   1,   0,   1,   0,  ...  // corrected bits
#           --> 01101000, 01100101, 01111001       // bytes
#           --> 104, 101, 121                      // ASCII values
#           --> "hey"
#
########################################################################################################################################################################################################################################

def convert(item):
    return ''.join([x + x + x for x in item])  

def encode(string):    
    return ''.join(map(convert, ["{0:08b}".format(ord(x)) for x in string]))

def correct(item):
    one = 0
    for x in item:
        if x == '1':
            one += 1  
    return 1 if one > 1 else 0

def decode(bits):
    input = [bits[x : x + 3] for x in range(0, len(bits), 3)]
    i = 0
    bin = 0
    result = ''
    for x in reversed(list(map(correct, input))):
        bin += 2 ** i * x
        i += 1
        if i == 8:
            i = 0
            result = chr(bin) + result
            bin = 0
    return result