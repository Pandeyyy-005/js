class Student{
    name:string;
    studentId:number;
    grade:string;
    address:string;
    constructor(name:string,studentId:number,grade:string,address:string) {
        this.name=name
        this.studentId=studentId
        this.grade=grade
        this.address=address
    }
    displayInfo(){
        return "name:"+this.name+" "+"studentId:"+" "+this.studentId+" "+"grade:"+" "+this.grade+" "+"address:"+" "+this.address
    }
}
const s=new Student("tom",102,"A","sfgdgd")
console.log(s.displayInfo());
