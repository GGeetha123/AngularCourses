class student {
    private sno:number = -1
    private name:string = "NoName"
    constructor(sno:number,name:string){
        this.sno=sno
        this.name=name
    }

    display():void {
        console.log("sno:",this.sno,"name:",this.name)
    }
}

var obj=new student(1,"Roger")