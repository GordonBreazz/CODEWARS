/*
3 kyu Multiplying numbers as strings: Part II

This is the Part II of Multiplying numbers as strings.

TODO
Multiply two numbers! Simple!

Rules
The arguments are passed as strings.
The numbers will be very large
The arguments can be negative, in decimals, and might have leading and trailing zeros. e.g. "-01.300"
Answer should be returned as string
The returned answer should not have leading or trailing zeroes (when applicable) e.g. "0123" and "1.100" are wrong, they should be "123" and "1.1"
Zero should not be signed and "-0.0" should be simply returned as "0".
*/

'use strict';

const multiply = function(a, b)
{ 

    var testDigit = function(digit) {
        return (/^\d$/.test(digit));
    };

    // Check if argument is valid array
    var isArray = function(arg) {
        return Object.prototype.toString.call(arg) === '[object Array]';
    };

    var isValidType = function(number) {
        return [
            typeof number === 'number',
            typeof number === 'string' && number.length > 0,
            isArray(number) && number.length > 0,
            number instanceof BigNumber
        ].some(function(bool) {
            return bool === true;
        });
    };

    var errors = {
        'invalid': 'Invalid Number'
    };

    // Constructor function which creates a new BigNumber object
    // from an integer, a string, an array or other BigNumber object
    function BigNumber(initialNumber) {
        var index;

        if (!(this instanceof BigNumber)) {
            return new BigNumber(initialNumber);
        }

        this.number = [];
        this.sign = 1;
        this.rest = 0;

        if (!isValidType(initialNumber)) {
            this.number = errors['invalid'];
            return;
        }

        if (isArray(initialNumber)) {
            if (initialNumber.length && initialNumber[0] === '-' || initialNumber[0] === '+') {
                this.sign = initialNumber[0] === '+' ? 1 : -1;
                initialNumber.shift(0);
            }
            for (index = initialNumber.length - 1; index >= 0; index--) {
                if (!this.addDigit(initialNumber[index]))
                    return;
            }
        } else {
            initialNumber = initialNumber.toString();
            if (initialNumber.charAt(0) === '-' || initialNumber.charAt(0) === '+') {
                this.sign = initialNumber.charAt(0) === '+' ? 1 : -1;
                initialNumber = initialNumber.substring(1);
            }

            for (index = initialNumber.length - 1; index >= 0; index--) {
                if (!this.addDigit(parseInt(initialNumber.charAt(index), 10))) {
                    return;
                }
            }
        }
    }

    BigNumber.prototype.addDigit = function(digit) {
        if (testDigit(digit)) {
            this.number.push(digit);
        } else {
            this.number = errors['invalid'];
            return false;
        }

        return this;
    };

    // this.number * number
    BigNumber.prototype.multiply = function(number) {
        if (typeof number === 'undefined') {
            return this;
        }
        var bigNumber = BigNumber(number);
        var index;
        var givenNumberIndex;
        var remainder = 0;
        var result = [];

        if (this.isZero() || bigNumber.isZero()) {
            return BigNumber(0);
        }

        this.sign *= bigNumber.sign;

        // multiply the numbers
        for (index = 0; index < this.number.length; index++) {
            for (remainder = 0, givenNumberIndex = 0; givenNumberIndex < bigNumber.number.length || remainder > 0; givenNumberIndex++) {
                result[index + givenNumberIndex] = (remainder += (result[index + givenNumberIndex] || 0) + this.number[index] * (bigNumber.number[givenNumberIndex] || 0)) % 10;
                remainder = Math.floor(remainder / 10);
            }
        }

        this.number = result;
        return this;
    };

    // Check if this.number is equal to 0
    BigNumber.prototype.isZero = function() {
        var index;
        for (index = 0; index < this.number.length; index++) {
            if (this.number[index] !== 0) {
                return false;
            }
        }

        return true;
    };

////////////////////////////////////////////////////////////////////////////////////////

let aFrac = a.split('.')
let bFrac = b.split('.')

let precisionA = 0
let precisionB = 0

if (aFrac.length > 1 ) {
  aFrac[1] = aFrac[1].replace(/0*$/g, '')
  precisionA = aFrac[1].length
}

if (bFrac.length > 1 ) {
  bFrac[1] = bFrac[1].replace(/0*$/g, '')
  precisionB = bFrac[1].length
}

if (aFrac[1] == '') aFrac.splice(1, 1);
if (bFrac[1] == '') bFrac.splice(1, 1);

let prsMax = Math.max(precisionA, precisionB);
let prs = precisionA + precisionB;


if (aFrac.length > 1 ) aFrac[1] = aFrac[1].replace(/0*$/g, '').padEnd(prsMax, '0')
if (bFrac.length > 1 ) bFrac[1] = bFrac[1].replace(/0*$/g, '').padEnd(prsMax, '0')


let result = BigNumber(aFrac.join('')).multiply(bFrac.join(''));
let resultInt = BigNumber(aFrac[0]).multiply(bFrac[0]).number.reverse().join('').replace(/^0*/g, '') || '0'
let prsInt = resultInt.length;


let sign = result.sign != 1 ? '-' : '';
let st = result.number.reverse().join('').replace(/^0*/g, '') || '0'

if (st == '0') return '0'

let resInt = st.substring(0, prsInt)
let resFra = st.substring(prsInt).replace(/0*$/g, '')

if (resInt < resultInt) resInt = resInt+'0'

if (aFrac[0].replace(/0*$/g, '') == '' || bFrac[0].replace(/0*$/g, '') == '' ){
  resInt = '0';
  if ((aFrac.length>1 || bFrac.length>1) && resFra == '') resFra = st
  if (resFra.replace(/0*$/g, '') != '') {
    resFra = st.replace(/0*$/g, '').padStart(prs, '0')
  }
}
result = resInt
if (resFra != '') result+= '.' + resFra
return  sign + result;
}

module.exports = {multiply}