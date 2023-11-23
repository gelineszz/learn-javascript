console.log("================== ARRAY ==================");

let names = ["Shaun", "Ryu", "Chuna"];
console.log(names);
console.log(names[1]);

// Overide certain value in different position of array
names[1] = "Ken";
console.log(names[1]);


let ages = [20, 25, 30, 35];
console.log(ages[2]);


// Array methods
// Join all elements of the array into one string
let joinedArray = names.join(",");
console.log(joinedArray);

// Get the index of the array that match the value
let idxOf = names.indexOf("Chuna");
console.log(idxOf);

// Combine two or more arrays together
let concat = names.concat(["Yuna", "Fina"]);
console.log(concat);

// Add new element to the array and return the new length of the array
let push = names.push("Zeth");
console.log(push);
console.log(names);

// Remove the last element of the array and return the element that was removed
let pop = names.pop();
console.log(pop);
console.log(names);