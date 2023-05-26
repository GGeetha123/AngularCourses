a=20
function printer() {
   // a=32 // function scope
    console.log("a: ", a)
    var a= 60 //declared the variable here only so a is undefined above console a value. If it is not declared then line no 1 can be printed in line no 4
}
printer()
console.log("global a variable : " , a)
console.log("-------------------------------------")
console.log(b)
var b=20
function printer1() {
   // a=32 // function scope
    console.log("b: ", b)
    var b= 60 //declared the variable here only so b is undefined above console b value. If it is not declared then line no 1 can be printed in line no 4
}
printer1()
console.log("global a variable : " , b)

/* result
a:  undefined
global a variable :  20
-------------------------------------
undefined
b:  undefined
global a variable :  20
*/