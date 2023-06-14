numbers=[353,634,34,345,65,34,335,4365,34,34]


// filter, map, reduce
//number.filter(callback)
//callback must return boolean, if true is returned element is retained
// for false element is removed

filterresult = numbers.filter((x)=>x>500)

//map -> number.map(callback)
// callback must take an input and return an output

 mapresult=  numbers.map(x=> x+100)

 //reduce -> number.reduce(callback)
 // callback must take two inputs and should produce one output
 // usually the two inputs current element, result of previous iteration

 reduceresult = numbers.reduce((a,b)=>a+b)

 console.log(filterresult)
 console.log(mapresult)
 console.log(reduceresult)
/*
  filter -  if there is n input , length of output would be <= n
    [34,35,356,346] -> [34,346]
  map - if there is n input, length out the output woudl be n
    ex: ['raj','ravi','ram'] -> ['RAJ','RAVI','RAM']
 reduce - if there is n input, output would be one result
    [1,2,3,4,5] -> 10


*/
/* results
[ 634, 4365 ]
[
  453,  734, 134,
  445,  165, 134,
  435, 4465, 134,
  134
]
6233
*/