function register(username){
    if(!username)
    {
        console.log("Invalid username")
    }
    else{
        console.log("Registered")
    }
}
register("");

function transfer(balance, amount){
    if (balance < 0){
        throw new Error("Negative amount not allowed");
    }
    if(amount > balance)   return "insufficient funds!!";
    return amount - balance;
}
console.log(transfer(2, 5)); //using guard clauses

