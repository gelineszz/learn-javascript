console.log("================== STRING ==================");

// Strings
console.log("Hello world!");

let email = "admin@mail.com";
console.log(email);

// String concatenation => joining many string into one
let firstName = "Diana";
let lastName = "Rosevelt";

let fullName = firstName + " " + lastName;
console.log(fullName);

// Getting character => using square bracket []
console.log(fullName[0]);

// String length
console.log(fullName.length);

// String methods
console.log(fullName.toUpperCase());

let result = fullName.toLowerCase();
console.log(result, fullName);





// Common string method
// Search the position of the string that you want by using indexOf method
let index = email.indexOf("@");
console.log(index);

// Search the last position of the string that you want by using lastIndexOf method
let index2 = email.lastIndexOf("i");
console.log(index2);

// Slice section from string using
// Have 2 parameters: start and end
let slice = email.slice(0, 9);
console.log(slice);

// Substring same like slice but have different parameters
// Have also 2 parameters: start and length of characters that you want to take
let substring = email.substring(4, 2);
console.log(substring);

// Replace certain character of the string with another character
// This method onlu replace the first character, not all of it
let replace1 = email.replace("a", "Q");
console.log(replace1);

let replace2 = email.replace("m", "Q");
console.log(replace2);





// TEMPLATE STRING / TEMPLATE LITERAL
const title = "Best Read of 2023";
const author = "Mario";
const love = 300;

// Concatenate way
let longStr1 = "The blog called " + title + " by " + author + " has " + love + "likes.";
console.log(longStr1);

// Template string way
let longStr2 = `The blog called ${title} by ${author} has ${love} likes.`;
console.log(longStr2);

// Creating HTML templates
let html = `<h2>${title}</h2>
    <p>${author}</p>
    <span>The blog has ${love} likes.</span>
`;

console.log(html);