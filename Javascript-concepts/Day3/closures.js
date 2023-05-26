function outer(b) {
    state = 1
    function inner() {
        console.log("Inner function starts")
        console.log( state ,' state variable calling from inside the function')
        console.log( b ,' b variable calling from inside the function')
        innerstate = 1
        console.log(innerstate, 'innerstate variable calling from inside the function')
        state++
        innerstate++
        console.log("Inner function ends")
    }
    //inner() it is working
    console.log( state ,' state variable calling from outside the function')
    //console.log(innerstate, 'innerstate variable calling from outside the function')
    return inner
}
outer("Scope variable passed")
console.log("---------------------------")
//outer.inner() will give error this line
result = outer("ABCDEF") // it returns the function "inner" and assigned to result variable
console.log(result)
console.log("-------------fsdfdsfsdfds--------------")
result() //should be called as function
result()
result()
/*
1  state variable calling from outside the function
---------------------------
1  state variable calling from outside the function
[Function: inner]
-------------fsdfdsfsdfds--------------
Inner function starts
1  state variable calling from inside the function
ABCDEF  b variable calling from inside the function
1 innerstate variable calling from inside the function
Inner function ends
Inner function starts
2  state variable calling from inside the function
ABCDEF  b variable calling from inside the function
1 innerstate variable calling from inside the function
Inner function ends
Inner function starts
3  state variable calling from inside the function
ABCDEF  b variable calling from inside the function
1 innerstate variable calling from inside the function
Inner function ends
*/