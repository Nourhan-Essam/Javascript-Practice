const settings = new WeakMap(); //Task 1

const user1 = {name: "Ali"};
const user2 = {name: "Ammar"};

settings.set(user1, {address : "Egypt, Cairo"});
settings.set(user2, {address: "KSA, Jeddah"});
console.log(settings.get(user1));  //Task 2

const sessions = new WeakSet();   //Task 3
const session = {id: 111};
sessions.add(session);
console.log(sessions.has(session)); //Task 4