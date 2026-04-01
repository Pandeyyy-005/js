abstract class Person {
    abstract getDetails():void
    abstract getRole():void
}
class Student extends Person{
    name:string;
    RollNo:number;
    role:string;
    constructor(name:string,RollNo:number,role:string) {
        super()
        this.name=name
        this.RollNo=RollNo
        this.role=role
    }
    getDetails(): void {
        console.log("name:"+this.name+" "+"RoolNo:"+this.RollNo);
        
    }
    getRole(): void {
        console.log("role:"+this.role);
        
    }

}
class Teacher extends Person{
    name:string;
    id:number;
    role:string;
    constructor(name:string,id:number,role:string) {
        super()
        this.name=name
        this.id=id
        this.role=role
    }
    getDetails(): void {
        console.log("name:"+this.name+" "+"id:"+this.id);
        
    }
    getRole(): void {
        console.log("role:"+this.role);
        
    }

}
const s=new Student("tom",123,"monitor")
s.getDetails()
s.getRole()
const t=new Teacher("shree",12657,"HOD")
t.getDetails()
t.getRole()
