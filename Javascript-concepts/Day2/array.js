a=[1,2,3,4,5]
console.log(a[5]) // it gives error 'undefined'
console.log('-------------------------------')

a[2] = 44 // can be updated the value to this index
console.log(a[2])
console.log('-------------------------------')

a[11] = 100 //can be assigned and will not give an error
console.log(a)
console.log(a[11])
console.log('-------------------------------')

a[-23] = 2020 //can be assigned even in the negative index and will not give an error. This will considered as property
console.log(a)
console.log(a.length + " is a length of the array")
console.log(a[-23])

a['name'] = 'Geetha' //can be assigned even in the negative index and will not give an error. This will considered as property
console.log(a)
console.log(a.length + " is a length of the array")
console.log(a['name'])
console.log('-------------------------------')

b = {sno: 1, name: 'Geetha' }
a[b] = 'Javascript object' //This will considered as property
console.log(a)
console.log(b)
console.log(a.length + " is a length of the array")
console.log(a[b])
console.log('-------------------------------')
/* result
undefined
-------------------------------
44
-------------------------------
[ 1, 2, 44, 4, 5, <6 empty items>, 100 ]
100
-------------------------------
[ 1, 2, 44, 4, 5, <6 empty items>, 100, '-23': 2020 ]
12 is a length of the array
2020
[ 1, 2, 44, 4, 5, <6 empty items>, 100, '-23': 2020, name: 'Geetha' ]
12 is a length of the array
Geetha
-------------------------------
[
  1,
  2,
  44,
  4,
  5,
  <6 empty items>,
  100,
  '-23': 2020,
  name: 'Geetha',
  '[object Object]': 'Javascript object'
]
{ sno: 1, name: 'Geetha' }
12 is a length of the array
Javascript object
-------------------------------
*/