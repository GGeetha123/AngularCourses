function ReturnValue(input){
    var fruits=["Apple","Orange","Banana","Graphs", "Papaya"]
    var vegi =["Brinjal","LadiesFinger","Beans","Onion","Carrot"]
    return new Promise(function(send, deny) {
        setTimeout(function()  {
            if(input == "fruits")
            send(fruits[Math.round(Math.random()*2)])
            else if(input == "vegi")
            send(vegi[Math.round(Math.random()*3)])
            else
                deny( "Give only fruits or vegi to give a result")
        }, 2000)//will call after 2 seconds
    })
}
async function callerFunction()
{
    try {
        result = ReturnValue("fruits")
        console.log("recieved", result)
       /* result.then (
            //console.log("After 2 seconds Fruits settimeout called ------------------------------")gives error
            function(data) { console.log(data, " Captures")},
            function(error) {console.log(error)}
        
        ) */
        console.log("Fruits ends ------------------------------")
        //
        result2 = ReturnValue("vegi")
        console.log("recieved", result2)
        console.log("Vegi ends ------------------------------")
        result3 = ReturnValue("")
        console.log("recieved", result3)
        console.log("Reject scenario ends ------------------------------")
       }
    catch(e)
    {
        console.log(e)
    }
}
callerFunction()

/* result
recieved Promise { <pending> }
Fruits ends ------------------------------
recieved Promise { <pending> }
Vegi ends ------------------------------
recieved Promise { <pending> }
Reject scenario ends ------------------------------
node:internal/process/promises:288
            triggerUncaughtException(err, true  fromPromise );
            ^

[UnhandledPromiseRejection: This error originated either by throwing inside of an async function without 
a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "Give only fruits or vegi to give a result".] {
  code: 'ERR_UNHANDLED_REJECTION'
}
*/