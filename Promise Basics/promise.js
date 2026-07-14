const isAvailable = new Promise((resolve, reject) =>{
    const isOnline = true;
    if(isOnline)
        resolve("Connected");
    else
        reject("No Connection");
});
isAvailable.then(data => console.log(data)); //Connected