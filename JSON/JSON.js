// const book =
// {
//     "title" : "Little Bear",
//     "author": "Ali",
//     "year" : 2009
// }; //Task 1

// const user = {
//     "name" : "Ammar",
//     "age" : 29,
//     "address" : "Egypt"
// }; 
// const jsonFormat = JSON.stringify(user);
// console.log(jsonFormat);  //Task 2

// const books = {
//   title: "JavaScript Basics",
//   pages: 300,
//   available: true
// };
// const reformat = JSON.stringify(books);
// console.log(reformat);

// const arr = [10, 20, 30, 40];
// const jsonArray = JSON.stringify(arr);
// console.log(jsonArray);


// const user = {
//   name: "Lina",
//   skills: ["HTML", "CSS", "JS"]
// };
// const prettyPrint = JSON.stringify(user, null, 4);
// console.log(prettyPrint);

// const json = '{"title":"JavaScript","level":"Beginner"}';
// const reformat = JSON.parse(json);
// console.log(reformat.title);

// const json = '[5, 10, 15]';
// const arr = JSON.parse(json);
// console.log(arr[1]);


const bad = "{x:1}";

try {
  JSON.parse(bad);
} catch {
  console.log("Invalid JSON detected");
}



// const person = {
//     name : "Omar",
//     age : "24",
//     address : "Cairo"
// };
// const convertToJson = JSON.stringify(person);
// const reparse = JSON.parse(convertToJson);
// console.log(reparse);