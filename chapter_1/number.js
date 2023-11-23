console.log("================== NUMBER ==================");

radius = 10;
const pi = 3.14;

console.log(radius, pi);

// math opertation
// +  (addition)
// -  (subtraction)
// *  (multiplication)
// /  (division)
// ** (to the power of)
// %  (remainder)

console.log(10 / 2);

let remainder = radius % 3;
console.log(remainder);

let areaOfCircle = pi * radius**2;
console.log(areaOfCircle);

// Order of operation => B I D M A S
// Bracket => Indices => Division => Multiplication, Addition, Subtraction
let rslt = 5 * (10 - 3)**2;
console.log(rslt);

// Shorthand notation
let likes = 10;
// likes = likes + 1;
// OR
likes++;
console.log(likes);

// likes = likes - 1;
// OR
likes--;
console.log(likes);

// likes = likes + 10;
// OR
likes += 10;
console.log(likes);

// likes = likes - 5;
// OR
likes -= 5;
console.log(likes);

// likes = likes * 2;
// OR
likes *= 2;
console.log(likes);

// likes = likes / 5;
// OR
likes /= 5;
console.log(likes);

// Not a Number or NaN
console.log(5 / "Hello");
console.log(5 * "Hello");

// Concatenate number
let str = "the blog has " + likes + " likes.";
console.log(str);