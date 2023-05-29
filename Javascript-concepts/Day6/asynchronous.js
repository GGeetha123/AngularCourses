//this will work browser and node 
// Param 1 - callback function, Param2 - time [in milliseconds]
setTimeout(function() { //Anonymous call
    console.log("Calling setTimeout")
},8000) 

function delayedProcess(){
    console.log("Started function!")
    setTimeout(function()  {
        return "Hey!!!!!!!!"
    }, 0);
}
result = delayedProcess()
console.log(result)
console.log("------------------------------")
function delayedProcess_1(input){
    console.log("Started function!")
    return new Promise(function(resolve, reject) {
    setTimeout(function()  {
        if(input == "badinput")
            reject("Rejected scenario")
        else
            resolve( "Hey!!!!!!!!")
    }, 3000)
});
}
result = delayedProcess_1("badinput")
result.then (
    function(data) { console.log(data, " is getting processed")},
    function(error) {console.log(error)}

)
console.log("Resolving scenario ------------------------------")
result = delayedProcess_1("")
result.then (
    function(data) { console.log(data, " is getting processed")},
    function(error) {console.log(error)}

)
/* result
Started function!
undefined
------------------------------
Started function!
Resolving scenario ------------------------------
Started function!
Rejected scenario
Hey!!!!!!!!  is getting processed
Calling setTimeout
*/