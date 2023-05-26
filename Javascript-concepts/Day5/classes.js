//this class feature from es2015
class Student {
    construct(sno,name){
    this.sno = sno
    this.name = name
    //console.log(this) //this will print the function definiton
}
display() {
    console.log("Sno: ",this.sno, "Name: ", this.name)
}
}
obj1 = new Student(1,"AAAAA") 
obj2 = new Student(1,"BBBBB") 
obj1.display()
obj2.display()
console.log("----------------------------------")
/*

*/