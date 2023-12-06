console.log("================== BOOLEAN ==================");

// Boolean and comparison
console.log(true, false, "true", "false");


// Method that can return boolean
let mail = "zeth.yun@mail.com";
console.log(mail);

let charNames = ["Mario", "Luigi", "Toad"];
console.log(charNames);

// Look whether certain characther appears in string
let include1 = mail.includes("@");
console.log(include1);

// In array, it will look whether the string appears in the array
let include2 = charNames.includes("Luigi");
console.log(include2);


// Comparison operators
let nums = 25;
console.log(nums == 25); // equal to
console.log(nums == 30); // equal to
console.log(nums != 30); // not equal
console.log(nums > 20);  // greater than
console.log(nums < 20);  // less than
console.log(nums >= 25); // greater than or equal to
console.log(nums <= 25); // less than or equal to

let nameStr = "Diana";
console.log(nameStr == 'diana'); // False
console.log(nameStr == 'Diana'); // True

/* 
 * In this case, the letter "D" is later than letter "B" in the alphabet
 * That is why the later letters in the alphabet are GREATER
 * than earlier letters in the alphabet (D > B)
 */ 
console.log(nameStr > 'Biana'); // True


/* 
 * The difference is in the first letter of both words
 * with one uppercase letter and the other is lowercase letter
 * Lowercase letter is GREATER than an uppercase letter (d > D)
 */ 
console.log(nameStr > 'diana'); // False


/* 
 * The uppercase letter "D" is LESS than any lowercase letters
 * Hence (D < any lowercase letter) OR
 * any lowercase letter > any uppercase letter IF the letter itself is not the same (e.g. "R" and "r")
 */ 
console.log(nameStr > 'ciana'); // False



// Loose VS Strict Comparison

let nums2 = 25;

/*
 * == & != is abstract equality or loose equality
 * It is not comparing the value's type, only the value
 * (equal to)
 */
console.log(nums2 == 25);
console.log(nums2 == '25');
console.log(nums2 != 25);
console.log(nums2 != '25');

/*
 * Meanwhile, === & !== is strict equality
 * It is comparing the value and the value's type
 * (equal value and equal type)
 */
console.log(nums2 === 25);
console.log(nums2 === '25');
console.log(nums2 !== 25);
console.log(nums2 !== '25');