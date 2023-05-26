a=20
function printer() {
   var a=32 // function scope
    console.log("a: ", a)
    a= 60 //will not impact the global variable, since variable declared within function and assigned value
}
printer()
console.log("global a variable : " , a)

/* result
a:  32
global a variable :  20
*/