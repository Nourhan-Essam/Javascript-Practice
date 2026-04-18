window.onerror = function(message, lineno)
{
    console.log("Message: ", message);
    console.log("Line No: ", lineno);
    return true;
}
startMagicHappen();

window.addEventListener("unhandledrejection", function(event){
    console.error("Unhandled Rejection", event.reason);
});
Promise.reject("Server didn't respond!!");

function logError(error){
    console.error("Central log: ", error.message || error);
}
window.onerror = function(msg, src, line, col, err){
    logError(error || new Error(msg));
};
testError();

window.addEventListener("unhandledrejection", function(event){
    logError(event.reason);
});
Promise.reject("Just test the method");

notExistingFunction(); //Runtime Error
Promise.reject("API Failed"); //unhandled promise