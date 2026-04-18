function safeDivision (a, b)
{
    try{
        if(b === 0)
        {
            throw new Error("Division by zero!!");
        }
        return a /b;
    }
    catch(err)
     {
        console.log(err.message);
        return null;
     }
}
console.log(safeDivision(10, 0));

function getUserName(user){
    if(!user || !user.name)
    {
        throw new Error("Username required!!");
    }
    return user.name;
}
const user = {name: "Ali"};
console.log(getUserName(user));
console.log(getUserName(" "));

function processData(data)
{
    try{
        if(!data){
            throw new Error("No data!!");
        }
    }
    catch(error)
    {
        console.log("Processing failed!!");
        throw error; //rethrow
    }
}
console.log(processData());

function defensiveFunction(price, tax)
{
    if(typeof price !== "number" || typeof tax !== "number")
    {
        throw new TypeError("inputs must be numbers");
    }
    if ( price < 0 || tax < 0)
    {
        throw new RangeError("negative inputs aren't allowed!!");
    }
    return price + (price * tax);
}
console.log(defensiveFunction("1", -1));