//Ex:1
// let key = "price";
// let car = {
//     brand:"BMW",
//     model: "G80",
//     year: "2026",
//     "engine Size": "3.0",
//     [key]: 2000000

//Ex:2
// }
// // console.log(car.model);
// // console.log(car["model"]);
// car.color = "black";
// console.log(car.color);
// console.log(car["engine Size"]);
// console.log(car.price);

//Ex:3
// const person = {
//     name : "Ammar",
//     job: "Pilot",
//     address:{country:"Egypt", city: "Cairo"},
//     greet(){
//         console.log("Hello, Cap!!");
//     }
// }
// console.log(person.address.country);
// person.greet();

//Ex:4
// const student = {
//     name: "Ali",
//     grade : 99,
//     showInfo() {
//         console.log(`${this.name} has grade ${this.grade}`);
//     }
// }
// student.showInfo();

//Ex:5
// const obj = Object.create(null);
// obj.name = "Omar";
// console.log("name" in obj);
// console.log(Object.hasOwn(obj, "name"));
// console.log(Object.hasOwn(obj, "toString"));
// obj.hasOwnProperty("name");