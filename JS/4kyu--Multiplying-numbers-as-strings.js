'use strict';

function multiply(a, b)
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

return  BigNumber(a).multiply(b).number.reverse().join('').replace(/^0*/g, '') || '0';

}