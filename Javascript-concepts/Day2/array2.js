a = [1,2,3,4]
for(let i=0;i<a.length;i++)
console.log(a[i]) // this will return the value of the index
console.log('-------------------------------')
for(let x in a)
console.log(x) // this will return the index
console.log('-------------------------------')
a[-23] ='Geetha'
b= {sno: 1, name:'Geetha'}
a[JSON.stringify(b)] = 'Javascript object'
for(let x in a)
console.log(x, a[x])
console.log('-------------------------------')
for(let x in a)
console.log(x) // this will return the index
console.log('-------------------------------')
/*
1
2
3
4
-------------------------------
0
1
2
3
-------------------------------
0 1
1 2
2 3
3 4
-23 Geetha
{"sno":1,"name":"Geetha"} Javascript object
-------------------------------
0
1
2
3
-23
{"sno":1,"name":"Geetha"}
-------------------------------
*/