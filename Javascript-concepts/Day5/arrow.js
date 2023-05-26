//arrow functions is an elagant way of writing anonymous functions. //nameless functions
// Benefits are beyond sytantic ease
//this feature from es2015
const add = function(a,b) {
    return a+b
}
const hey = function(name) {
    console.log("Hello!!!!! " + name)
}

sumup = (a,b) => a+b
greet =(name) => { console.log("Hey !!!" + name)}
sumupV2 = (a,b) => {
    console.log("anything")
    return a+b
}
console.log(add(40,50))
console.log(sumup(30,50))
hey('Geetha')
greet("You are great")
console.log(sumupV2(23,45))
/* result
90
80
Hello!!!!! Geetha
Hey !!!You are great
anything
68
*/
