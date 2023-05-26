names = ['Geetha','Ganesan','GG']
const [person1, person2, person3] = names
console.log(person1, person2, person3)
console.log('1 ----------------------------')
team = [{name: 'Raj', role:'Tester'},
        {name: 'Viji', role:'Lead'},
        {name: 'Vasanth', role:'Developer'}]
const [member1, member2, member3] = team       
console.log(member1, member2, member3)
console.log('2 ----------------------------')
const{surname : fname} = member2
//console.log(surname) gives error
console.log(fname) //it works fine....
console.log('3 ----------------------------')
/*
Geetha Ganesan GG
1 ----------------------------
{ name: 'Raj', role: 'Tester' } { name: 'Viji', role: 'Lead' } { name: 'Vasanth', role: 'Developer' }
2 ----------------------------
undefined
3 ----------------------------
*/