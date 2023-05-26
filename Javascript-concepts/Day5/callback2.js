function SendMe(arr,fun)
{
    let items = ["Nothing","A","so","one","four","trust","simple","poverty","activity"]
    for(x in arr)
    {
        if(arr[x] >= 0 && arr[x] <=8)
        
            fun(items[arr[x]])
        else
            fun("Invalid")
       
    }
}
SendMe([5,4,7,8,2,9],function(data) {

    console.log("Received--- " , data )
})
/*
Received---  trust
Received---  four
Received---  poverty
Received---  activity
Received---  so
Received---  Invalid
*/