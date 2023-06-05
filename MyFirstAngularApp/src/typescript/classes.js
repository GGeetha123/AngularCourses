var student = /** @class */ (function () {
    function student(sno, name) {
        this.sno = -1;
        this.name = "NoName";
        this.sno = sno;
        this.name = name;
    }
    student.prototype.display = function () {
        console.log("sno:", this.sno, "name:", this.name);
    };
    return student;
}());
var obj = new student(1, "Roger");
