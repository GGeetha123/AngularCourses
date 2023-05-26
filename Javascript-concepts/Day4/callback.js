function definition(fun)
{
    console.log("First set of logic")
    fun('Data set 1')
    console.log("--------------------------")
    console.log("Second set of logic")
    fun('Data set 2')
    console.log("--------------------------")
    console.log("Finished logic")
}
definition (
    function(data) {
        console.log('Inside fun method starts')
        console.log(data, 'is proceed by calling place')
        console.log('Inside fun method ends')
    }
)
/*
First set of logic
Inside fun method starts
Data set 1 is proceed by calling place
Inside fun method ends
Second set of logic
Inside fun method starts
Data set 2 is proceed by calling place
Inside fun method ends
Finished logic

C:\Geetha_Drive\Platform Projects\Angular-course-training\Javascript-concepts\Day4>node callback.js
First set of logic
Inside fun method starts
Data set 1 is proceed by calling place
Inside fun method ends
--------------------------
Second set of logic
Inside fun method starts
Data set 2 is proceed by calling place
Inside fun method ends
--------------------------
Finished logic
*/