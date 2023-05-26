person = { sno:1, name:'Geetha', city:'Chennai'}
candidate = person // pass by references
candidate.skills = ['C','C#', 'C++']
console.log(person)
console.log(candidate)
console.log('1 ----------------------------')
member = {...person, interests: ['Dancing', 'Planting', 'Playing']}
console.log(member)
console.log('2 ----------------------------')
member = {...person,city:'Mumbai', interests: ['Dancing', 'Planting', 'Playing']}
console.log(member)
console.log('3 ----------------------------')
/* result of this program
{
  sno: 1,
  name: 'Geetha',
  city: 'Chennai',
  skills: [ 'C', 'C#', 'C++' ]
}
{
  sno: 1,
  name: 'Geetha',
  city: 'Chennai',
  skills: [ 'C', 'C#', 'C++' ]
}
1 ----------------------------
{
  sno: 1,
  name: 'Geetha',
  city: 'Chennai',
  skills: [ 'C', 'C#', 'C++' ],
  interests: [ 'Dancing', 'Planting', 'Playing' ]
}
2 ----------------------------
{
  sno: 1,
  name: 'Geetha',
  city: 'Mumbai',
  skills: [ 'C', 'C#', 'C++' ],
  interests: [ 'Dancing', 'Planting', 'Playing' ]
}
3 ----------------------------
*/