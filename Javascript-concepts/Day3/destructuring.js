person = { sno:1, name:'Geetha', city:'Chennai'}
const{sno,name,city} = person
console.log(name)
console.log('1 ----------------------------')

const{sno:lsno , name: fname ,city: scity} = person
console.log(scity)
console.log('2 ----------------------------')
//lsno = 10 gives error
//sno = 10 gives error
console.log(sno)
console.log('3 ----------------------------')
/*
Geetha
1 ----------------------------
Chennai
2 ----------------------------
1
3 ----------------------------
*/