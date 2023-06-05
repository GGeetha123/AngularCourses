function sample(sno,name)
{
    console.log("sno:",sno,"name:",name)
}
//sample()
sample(1,"Geetha")
sample("Geetha","1")
//sample(1,2,3)

function sample1(sno:number, name:string) {
    console.log("sno:", sno, "name:", name);
}
sample1(1, "Geetha");
//sample1("Geetha", "1"); //will give error since specified the data types in the parameter

function sample2(sno:number, name:string):void {
    console.log("sno:", sno, "name:", name);
    //return "hello" //shouldnot be there when it is in void
}
//sample()
sample2(1, "Geetha");
