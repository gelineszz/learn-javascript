console.log("================== NULL AND UNDEFINED ==================");

// Javascript will let us know that the variables is undefined
// because we did not assign any value to the variable
let city1;
console.log(city1, city1 + 3, `the name if the city is ${city1}`);

// But we can explicitly avoid that by assignning the variable to null
let city2 = null;
console.log(city2, city2 + 3, `the name if the city is ${city2}`);