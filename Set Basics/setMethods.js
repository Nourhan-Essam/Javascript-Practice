const roles = new Set();
roles.add("admin");
roles.add("editor");
roles.add("admin");
console.log(roles);                             //Task 1
console.log(roles.has("editor"));              //Task 2
console.log(roles.delete("admin"));           //Task 3
roles.clear();                               //Task4
console.log(roles.size);                    //Task 4

const scores = [10, 20, 20, 30, 30, 40];
const cleanValues = [...new Set(scores)];
console.log(cleanValues);                   //Tas 5