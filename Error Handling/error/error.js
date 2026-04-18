function divide(a,b){
    if(b == 0){
        throw new Error("Division by 0 isn't allowed");
    }
    else{
        return a / b;
    }
}
divide(10, 0);

function registerUser(userName)
{
    if (!userName)
    {
        throw new Error("user name invalid");
    }
    else 
    {
        return "user registered";
    }
}
registerUser("");

function setPrice(price)
{
    if(typeof price !== "number")
    {
         throw new TypeError("price isn't a number");
    }
    else{
        return price;
    }
}
setPrice("");


function withdraw(balance, amount)
{
    if(amount > balance)
    {
        throw new Error("Insufficinet funds");
    }
    return balance - amount;
}
withdraw(100, 1000);
withdraw(1000, 100);
console.log(withdraw(1000, 100));


function loadConfig(config)
{
    if(!config)
    {
        throw new Error("Missing Configuration!!"); //cannot continue safely so we used throw not return
    }
}

function findUser(id)
{
    if(!id) 
        {
             return null; //expected outcome so we used return
            }
}


class ValidationError extends Error{
    constructor(message)
    {
        super(message);
        this.name = "ValidationError";
    }
}
const myError = new ValidationError("Username is required");
throw myError;
console.log(myError); //custom error


class AuthError extends Error{
    constructor(message)
    {
        super(message);
        this.name = "AuthError";
    }
}
function login(user)
{
    const error = new AuthError("Username required!!");
    if (!user)
    {
        throw error;
    }
    else{
        return "Login successful";
    }
}
console.log(login("")); //Task 2 : custom error

class AuthErr extends Error{
    constructor(message){
        super(message);
        this.name = "AuthErr";
    }
}

try{
    const Err = new AuthErr("Login failed!!");
    throw Err;
}
catch(error)
{
    console.log("Name: ", error.name);
    console.log("Message: ", error.message);
    console.log("Stack: ", error.stack);
}  //try/catch + error type

class ConfigError extends Error{
    constructor(message)
    {
        super(message);
        this.name = "ConfigError";
    }
}
function loadConfig(config){
    if(!config)
    {
        throw new ConfigError("Missing Configuration!!");
    }
}
loadConfig(null); 