function sample(option) {
    if(option == 1)
    {
    return function (a,b) { //anonymous function
        return a+b
    }
}
else
    {
        return function (a,b) { //anonymous function
            return a-b
        }
    }
}
console.log(sample())
console.log(sample()(2,3))
console.log(sample(1)(2,3))
console.log("----------------------------------")

function add(a,b) {return a+b}
function sub(a,b) {return a-b}
function NestedFun(option) {
    if(option == 1)
    {
    return add
    }
    else
    {
        return sub
    }
    
}
console.log(NestedFun())
console.log(NestedFun(1)(10,5))
console.log(NestedFun(1)(10))
/* result
[Function (anonymous)]
-1
5
----------------------------------
[Function: sub]
15
NaN
*/