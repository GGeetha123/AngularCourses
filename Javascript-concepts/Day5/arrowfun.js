function libfun(fun){
    var items = ["Program1","Program2","Program3"]
    fun(items[Math.round(Math.random()*2)])

}

class DataHolder {
    constructor(data) {
        this.data = data
    }
    show() {
        console.log("this is my data ", this.data)
    }
    changeData() {
       /* libfun(function(value){
            this.data = value //this gives an error as undefined in this.data TypeError: Cannot set properties of undefined (setting 'data')
        })*/
         libfun(function(value){
            this.data = value //this will not give error since we added bind in this method
        }.bind(this))
        // Or we can use the arrow method to get the same result
        libfun((value) => {
            this.data = value //this will not give error since we added bind in this method
        })
    }
}
obj = new DataHolder("My Javascript")
obj.show()
obj.changeData()
obj.show()
/* result
this is my data  My Javascript
this is my data  Program3
*/