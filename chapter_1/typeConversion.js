console.log("================== TYPE CONVERSION ==================");
let number = '100';

console.log(number + 1); // Become concatenate => 1001

// Solution: convert the string into number first and then perform the calculation
number = Number(number);
console.log(number + 1); // 101

// Check the type of the variable/value
console.log(typeof number);


// Convert string to number
let word = Number('hello');
console.log(word); // NaN = Not a number


// Convert number to string
let numToStr = String(50);
console.log(numToStr, typeof numToStr);


// Convert number to boolean
let numToBool1 = Boolean(100); // truthy value
console.log(numToBool1, typeof numToBool1);

let numToBool2 = Boolean(0); // falsy value
console.log(numToBool2, typeof numToBool2);

let numToBool3 = Boolean('0'); // truthy value
console.log(numToBool3, typeof numToBool3);

let numToBool4 = Boolean(''); // falsy value
console.log(numToBool4, typeof numToBool4);


/*
 * EXPLICIT TYPE CONVERSION
 * =====================================================
 * Converting these type of conversion into boolean.
 * Some values are considered true and others false.
 * They are called truthy and falsy values.
 * 
 * The following values are falsy:
 * -) false
 * -) 0 (zero)
 * -) -0 (minus zero)
 * -) 0n (BigInt zero)
 * -) '', "", `` (empty string)
 * -) null
 * -) undefined
 * -) NaN
 * 
 * The following values are truthy:
 * -) '0' (a string containing a single zero)
 * -) 'false' (a string containing the text “false”)
 * -) [] (an empty array)
 * -) {} (an empty object)
 * -) function(){} (an “empty” function)
 */

