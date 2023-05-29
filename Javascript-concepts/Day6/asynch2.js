function ReturnValue(input){
    var fruits=["Apple","Orange","Banana","Graphs", "Papaya"]
    var vegi =["Brinjal","LadiesFinger","Beans","Onion","Carrot"]
    return new Promise(function(resolve, reject) {
        setTimeout(function()  {
            if(input == "fruits")
            resolve(fruits[Math.round(Math.random()*2)])
            else if(input == "vegi")
            resolve(vegi[Math.round(Math.random()*3)])
            else
                reject( "Give only fruits or vegi to give a result")
        }, 2000)//will call after 2 seconds
    })
}
result = ReturnValue("fruits")
result.then (
    //console.log("After 2 seconds Fruits settimeout called ------------------------------")gives error
    function(data) { console.log(data, " Captures")},
    function(error) {console.log(error)}

)
console.log("Fruits ends ------------------------------")
result2 = ReturnValue("vegi")
result2.then (
   // console.log("After 2 seconds Vegi settimeout called ------------------------------")
    (data) => console.log(data, " Captures"),
    (error) => console.log(error)

)
console.log("Vegi ends ------------------------------")
result3 = ReturnValue("")
result3.then (
   // console.log("After 2 seconds reject settimeout called ------------------------------")
    (data) => console.log(data, " Captures"),
    (error) => console.log(error)

)
console.log("Reject scenario ends ------------------------------")
/* result
Fruits ends ------------------------------
Vegi ends ------------------------------
Reject scenario ends ------------------------------
Orange  Captures
Brinjal  Captures
Give only fruits or vegi to give a result
*/