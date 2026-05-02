class User{
    #email;
    constructor(email){
        this.#email = email;
    }
    getEmail(){
        return this.#email;
    }
}

// const user = new User("test@gmail.comm");
// console.log(user.#email); //Private field '#email' must be declared in an enclosing class

class Counter{
    #count = 0;
    increment(value){
        this.#validate(value);
        this.#count += value;
    }
    getCount(){
        return this.#count;
    }
    #validate(value){
        if(typeof value !== "number" || value <= 0){
            throw new Error("Increment must be a positive number");
        }
    }
}
const c = new Counter();
c.increment(5);
console.log(c.getCount()); //5
