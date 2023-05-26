
function demoVariable() {
    var a = 23
    console.log("Outer variable : ", a)
    {
        var a = 45 // updating the global variable also if we declared with "var"
        console.log("Inside block variable : ", a)
    }
    console.log("Final Outer variable : ", a)
}
demoVariable()
console.log("----------------------------------------")
function demoVariable1() {
    var a = 23
    console.log("Outer variable : ", a)
    {
        let a = 45 // scope is inside the block alone
        console.log("Inside block variable : ", a)
    }
    console.log("Final Outer variable : ", a)
}
demoVariable1()
console.log("----------------------------------------")
function demoVariable2() {
    var a = 23
    console.log("Outer variable : ", a)
    {
        let a = 45 // scope is inside the block
        console.log("Inside block variable : ", a)
        {
            a = 200 //this will not get overwrite above let a variable. This is applicable only within block
        }
    }
    console.log("Final Outer variable : ", a) //Here global value alone will return
}
demoVariable2()
console.log("----------------------------------------")
function demoVariable3() {
    let a = 23
    console.log("Outer variable : ", a)
    {
        let a = 45 // scope is inside the block
        console.log("Inside block variable : ", a)
        {
            a = 200 //this will not get overwrite above let a variable. This is applicable only within block
        }
    }
    console.log("Final Outer variable : ", a) //Here global value alone will return
}
demoVariable3()
console.log("----------------------------------------")
function demoVariable4() {
    let a = 23
    console.log("Outer variable : ", a)
    {
       // var a = 45 // error gives, since already declared globally
        console.log("Inside block variable : ", a)
        {
            a = 200 //this will not get overwrite above let a variable. This is applicable only within block
        }
    }
    console.log("Final Outer variable : ", a) //Here global value alone will return
}
demoVariable4()

/* result
Outer variable :  23
Inside block variable :  45
Final Outer variable :  45
----------------------------------------
Outer variable :  23
Inside block variable :  45
Final Outer variable :  23
----------------------------------------
Outer variable :  23
Inside block variable :  45
Final Outer variable :  23
----------------------------------------
Outer variable :  23
Inside block variable :  45
Final Outer variable :  23
----------------------------------------
Outer variable :  23
Inside block variable :  23
Final Outer variable :  200
*/