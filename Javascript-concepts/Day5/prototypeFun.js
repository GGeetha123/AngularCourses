function Student(sno,name){
    this.sno = sno
    this.name = name
    console.log(this) //this will print the function definiton
}
//Student(1, "Geetha") // this is windows scope
new Student(1,"Ganesan") // separate scope is created for student   
//Student will behave as class and Student() will behave as constructor

Student.prototype.display = function() {
    console.log("Sno: ",this.sno, "Name: ", this.name)
}
console.log("----------------------------------")
obj1 = new Student(1,"AAAAA") 
obj2 = new Student(1,"BBBBB") 
obj1.display()
obj2.display()
console.log("----------------------------------")
/*
Student { sno: 1, name: 'Ganesan' }
----------------------------------
Student { sno: 1, name: 'AAAAA' }
Student { sno: 1, name: 'BBBBB' }
Sno:  1 Name:  AAAAA
Sno:  1 Name:  BBBBB
*/