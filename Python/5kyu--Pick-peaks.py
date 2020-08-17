############################################################################################################################################################################################################################################
#
#      KATA:5 kyu "Pick peaks"
#
#    SOURCE: https://www.codewars.com/kata/5279f6fe5ab7f447890006a7
#    AUTHOR: https://www.codewars.com/users/GordonBreazz
#
#      PLOT: In this kata, you will write a function that returns the positions and the values of the "peaks" 
#            (or local maxima) of a numeric array.
#            For example, the array arr = [0, 1, 2, 5, 1, 0] has a peak at position 3 with a value of 5 (since arr[3] 
#            equals 5).
#            
#            The output will be returned as an object with two properties: pos and peaks. Both of these properties 
#            should be arrays. If there is no peak in the given array, then the output should be {pos: [], peaks: []}.
#            
#            Example: pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]) should return {pos: [3, 7], peaks: [6, 3]} 
#            (or equivalent in other languages)
#            
#            All input arrays will be valid integer arrays (although it could still be empty), so you won't need to 
#            validate the input.
#            
#            The first and last elements of the array will not be considered as peaks (in the context of 
#            a mathematical function, we don't know what is after and before and therefore, we don't know if it is 
#            a peak or not).
#            
#            Also, beware of plateaus !!! [1, 2, 2, 2, 1] has a peak while [1, 2, 2, 2, 3] does not. In case of 
#            a plateau-peak, please only return the position and value of the beginning of the plateau. 
#            For example: pickPeaks([1, 2, 2, 2, 1]) returns {pos: [1], peaks: [2]} (or equivalent in other languages)
#            
#            Have fun!
#
############################################################################################################################################################################################################################################

def equal(st):
    st1 = ''
    fl = True
    fl1 = False        
    for i in  reversed(range(len(st))):
        if fl:
            if st[i] == '=':
                st1 = '-' + st1
                fl1 = True
            else:
                fl = False
                if fl1:                    
                    st1 = '-' + st1
                    fl1 = False
                else:
                    st1 = st[i] + st1
                    fl1 = False
        else:
            st1 = st[i] + st1           
    ch = '-'
    st2 = ''
    for i in  reversed(range(len(st1))):
        if st1[i] == '=':
            st2 = ch + st2
        else:
            st2 = st1[i] + st2
            ch = st1[i]                    
    return st2

def pick_peaks(arr):
    #your code here
    prep = -1
    pattern = ''
    st = ''
    i = 0
    for x in arr:
        if i > 0 :
            st += str(x)        
            if prep < x:
                pattern += '+'
            if prep > x:
                pattern += '-'
            if prep == x:
                pattern += '='
        else:
            pattern += ' '
        i += 1        
        prep = x   
              
    pattern = equal(pattern) + ' '    
    result = ''   
                
    for k in  range(len(pattern)):
        if pattern[k] == '-':
            result += ' '
        else:
            if pattern[k] == '+' and pattern[k+1] == '+':
                result += ' '
            else:
                if k != len(pattern)-2:                    
                    result += pattern[k]
                else:
                    result += ' '        
    pos = []
    peaks = []
    for i in  range(len(result)):
        if (result[i] == '+'):            
            pos.append(i)
            peaks.append(arr[i])
    print(pos, peaks)
    return {"pos":pos, "peaks":peaks}
