// functions == normal
// arrow function

// function greet(name) {
// 	return "Hello " + name;
// }
// console.log(greet("ANy name"));

// *****************

// const greet = (fName) => {
//     return "Hello " + fName;
// }
// console.log(greet("Some name "));

// () => {} // structure of arrow function

// ***********************

// const calculateArea = (w, h) => {
// 	const area = w * h;
// 	return area;
// };
// console.log(calculateArea(4, 5));

// *************************

// const makeObject = (key, value) => ({
// 	[key]: value, // structure of key value
// });

// console.log(makeObject('apple', 10));
// console.log(makeObject("user-1", 543541));
// console.log(makeObject("user-2", 54656));
// console.log(makeObject("user-5", 3654));

// for create the key value pair you have to use the () first and {} inside

// apple: 3;
// mango: 10;

// ****************************

// Higher-Order Functions

// const n = [1, 2, 3, 4, 5];
// const dN = n.map((n) => n * 3);
// console.log(n);
// console.log(dN);

// n= 1,2,3,4,5
// n.map() = 1,2,3,4,5
//  1*3,2*3,3*3,4*3,5*3

// *******************

// const addition = (a,b) => {
//     const add = a + b;
//     return add;
// };
// console.log(addition(4, 5));

// let sum = (a, b) => a + b;
// console.log(sum(1, 5));

// *******************************

// Anonymous function

// () => console.log('Hello World!')

// let fName = "niMiSHA and NIyAti";
// let lowerName= fName.toLowerCase();
// let upperName = fName.toUpperCase();
// console.log(lowerName);
// console.log(upperName);

// function capitalizeFirstLetter(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }

// console.log(capitalizeFirstLetter("if I ever add custom functions like that, my approach is to "));

// function capitalizeFirstLetter(sentence) {
// 	return sentence
// 		.split(" ")
// 		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
// 		.join(" ");
// }

// const sentence = "here is an example sentence.";
// const capitalized = capitalizeFirstLetter(sentence);
// console.log(capitalized); // Outputs: "Here Is An Example Sentence."
