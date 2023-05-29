person = { sno: 1, name: 'Geetha', city: 'Trichy'}
for(let x in person)
    console.log(x, " === ", person[x])
    console.log('-------------------------------')
    console.log(Object.keys(person))
    console.log('-------------------------------')
    list = [23, 45, 70, 56]
    list['sno'] = '100'
    list['name'] = 'Geetha'
    for(let x in list)
    console.log(x, " === ", list[x])
    console.log(Object.keys(list)) // this will give keys or indexes from the array
    console.log(Object.values(list)) // this will give values alone
    console.log('-------------------------------')
    person.skills = ['C','C++','C#']
    console.log(Object.keys(person))
    console.log('-------------------------------')
/* result
sno  ===  1
name  ===  Geetha
city  ===  Trichy
-------------------------------
[ 'sno', 'name', 'city' ]
-------------------------------
0  ===  23
1  ===  45
2  ===  70
3  ===  56
sno  ===  100
name  ===  Geetha
[ '0', '1', '2', '3', 'sno', 'name' ]
[ 23, 45, 70, 56, '100', 'Geetha' ]
-------------------------------
[ 'sno', 'name', 'city', 'skills' ]
-------------------------------

*/