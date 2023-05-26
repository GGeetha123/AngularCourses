function TestFun(a,b) {
    console.log(a,b)
}
TestFun(2,3)
TestFun(2)
TestFun()
TestFun(2,3,4)
TestFun('AAA','BBB','CCC')
TestFun(a='DDD',b='EEE')
TestFun(c='FFF')
/* result
2 3
2 undefined
undefined undefined
2 3
AAA BBB
DDD EEE
FFF undefined*/