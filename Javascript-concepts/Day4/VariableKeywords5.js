function demoVariable() {
    const a = 23
    console.log("Outer variable : ", a)
    {
        let a = 45 
        console.log("Inside block variable : ", a)
        {
            a = 200 //this will not get overwrite above let a variable. This is applicable only within block
        }
    }
    console.log("Final Outer variable : ", a) //Here global value alone will return
}
demoVariable()

/* result
Outer variable :  23
Inside block variable :  45
Final Outer variable :  23
*/