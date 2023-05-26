a = [23, 45, 70, 56]
console.log(a)
console.log('-------------------------------')
b=a //two way references - pass by reference
console.log(b)
console.log('-------------------------------')
b[30] = 200 
console.log(b) // references of b
console.log(a) // references of b
console.log('-------------------------------')
c = []
for(let x in a)
c[x] = a[x]
console.log(c) 
c[10] = 500
console.log(c) 
console.log(a) 
console.log('-------------------------------')
