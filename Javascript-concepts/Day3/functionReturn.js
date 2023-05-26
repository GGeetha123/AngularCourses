function A () {}
function B () {
    return 'I am from Angular course'}
C = function() { //anonymous function
    return "Hey!!!!!"
}
console.log(A()) //this gives the result of the return value
console.log(B())//this gives the result of the return value
console.log(C())//this gives the result of the return value
console.log('1 -------------------------')
console.log(A) //This gives the function definition
console.log(B) //This gives the function definition
console.log(C) //This gives the function definition
console.log('2 -------------------------')
B.store = {x:1, y:2, z:3}
console.log(B.store)
console.log('3 -------------------------')
/*
undefined
I am from Angular course
Hey!!!!!
1 -------------------------
[Function: A]
[Function: B]
[Function: C]
2 -------------------------
{ x: 1, y: 2, z: 3 }
3 -------------------------
*/