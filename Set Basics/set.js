const fruits = new Set();
fruits.add("apple");
fruits.add("banana");  
fruits.add("apple");

console.log(fruits);   //Task 1
console.log(fruits.has("banana"));  //Task 2
console.log(fruits.delete("apple")); //Task 3
console.log(fruits.size);

fruits.add("orange");
fruits.add("mango");
console.log(fruits);  //Task 4