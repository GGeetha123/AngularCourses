a = [23, 45, 70, 56,78]
b = [...a] //Copies only values to b array..this will not behave as references
console.log(a)
console.log(b)
console.log('1 -------------------------------')
b[10] = 400
console.log(a)
console.log(b)
console.log('2 -------------------------------')
c =[10,20,30,40]
a = [23, 45, 70, 56,78, c]
console.log(c)
console.log(a)
console.log('3 -------------------------------')
b=[...a]
console.log(b)
console.log(a)
console.log('4 -------------------------------')
b[5]=[...a[5]]
console.log(b)
console.log(a)
console.log('5 -------------------------------') 
a = [23, 45, 70, 56, 78, [...c]]
console.log(a)
b=[...a]
c[7] = 6000
console.log(a)
console.log(b)
console.log(c)
console.log('6 -------------------------------')
b[5][2] = 1000
console.log(a)
console.log(b)
console.log(c)
console.log('7 -------------------------------')
a = [23, 45, 70, 56, 78, ...c]
console.log(a) // this is not nested array
