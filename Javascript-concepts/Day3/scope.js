function sample() {
    //console.log(this)
    console.log(this.sample.store)
}
a= 10
sample.store = {sno: 1, name : 'VGK'}
sample()
/*
console.log(this.sample.store)
                            ^

TypeError: Cannot read properties of undefined (reading 'store')
    at sample (C:\Geetha_Drive\Platform Projects\Angular-course-training\Javascript-concepts\Day3\scope.js:3:29)
    */