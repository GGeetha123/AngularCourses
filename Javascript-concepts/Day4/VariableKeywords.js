a=20
function printer() {
    a=32
    console.log("a: ", a)
    a= 60
}
printer()
console.log("global a variable : " , a)
/* result
a:  32
global a variable :  60
*/