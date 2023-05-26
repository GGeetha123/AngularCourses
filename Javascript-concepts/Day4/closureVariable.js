function outer() {
    state = 40
    function inner() {
        console.log("Inner function starts")
        console.log( state ,' state variable calling from inside the function')
        state++
        console.log("Inner function ends")
    }
    console.log( state ,' state variable calling from outside the function')
    return inner
}
outer()
assignFn = outer()
assignFn()
assignFn()
assignFn()
console.log("---------------------------")
function outer2() {
    var Ostate = 40
    function inner2() {
        console.log("Inner function starts")
        console.log( Ostate ,' state variable calling from inside the function')
        Ostate++
        console.log("Inner function ends")
    }
    console.log( Ostate ,' state variable calling from outside the function')
    return inner2
}
assignFn1 = outer2()
assignFn2 = outer2()
assignFn1()
console.log("--- called 1----")
assignFn1()
console.log("--- called 2----")
assignFn1()
console.log("--- called 3----")
assignFn2()
console.log("--- called 4----")
assignFn1()
console.log("--- called 5----")
assignFn2()
console.log("--- called 6----")
assignFn1()
console.log("--- called 7----")
assignFn2()
console.log("---------------------------")
/*
40  state variable calling from outside the function
40  state variable calling from outside the function
Inner function starts
40  state variable calling from inside the function
Inner function ends
Inner function starts
41  state variable calling from inside the function
Inner function ends
Inner function starts
42  state variable calling from inside the function
Inner function ends
---------------------------
40  state variable calling from outside the function
40  state variable calling from outside the function
Inner function starts
40  state variable calling from inside the function
Inner function ends
--- called 1----
Inner function starts
41  state variable calling from inside the function
Inner function ends
--- called 2----
Inner function starts
42  state variable calling from inside the function
Inner function ends
--- called 3----
Inner function starts
40  state variable calling from inside the function
Inner function ends
--- called 4----
Inner function starts
43  state variable calling from inside the function
Inner function ends
--- called 5----
Inner function starts
41  state variable calling from inside the function
Inner function ends
--- called 6----
Inner function starts
44  state variable calling from inside the function
Inner function ends
--- called 7----
Inner function starts
42  state variable calling from inside the function
Inner function ends
---------------------------
*/