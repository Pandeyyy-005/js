abstract class Institute {
abstract getInstitutionType():string
}
interface Management{
addStudent():string
rmvStudent():string
}
class School extends Institute implements Management{
    institution:string;
    addName:string;
    addId:number;
    rmvName:string;
    rmvId:number;
    constructor(institution:string,addName:string,addId:number,rmvName:string,rmvId:number) {
        super()
        this.institution=institution
        this.addName=addName
        this.addId=addId
        this.rmvName=rmvName
        this.rmvId=rmvId
    }
    getInstitutionType(): string {
        return "institution type:"+this.institution
    }
    addStudent(): string {
        return "student name added:"+this.addName+" "+"student Id added:"+this.addId
    }
    rmvStudent(): string {
        return "student name rmevoed:"+this.rmvName+" "+"student Id removed:"+this.rmvId
    }

}
const s=new School("school","tom",132,"james",131)
console.log(s.getInstitutionType());
console.log(s.addStudent());
console.log(s.rmvStudent());


