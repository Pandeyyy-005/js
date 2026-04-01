class School{
    totalStudents():string{
       const totalStud:string[]=["tom","harry","james","henry"]
return "total student:"+totalStud.length
    }
    studentList():string{
const list:{name:string,id:number,address:string}[]=[  //{}->struct of one obj
    {
    name:"tom",
    id:15,
    address:"A/409 yk ngr"
},
{
    name:"harry",
    id:16,
    address:"A/402 sk ngr"
},
{
    name:"james",
    id:18,
    address:"A/002 jk ngr"
},
{
    name:"henry",
    id:13,
    address:"B/302 ak ngr"
}

]
const [tom,harry,henry,james]=list
    return `Details of students:
Name: ${tom.name}, ID: ${tom.id}, Address: ${tom.address}
Name: ${harry.name}, ID: ${harry.id}, Address: ${harry.address}
Name: ${james.name}, ID: ${james.id}, Address: ${james.address}`;
    }
}
const s=new School()
console.log(s.totalStudents());
console.log(s.studentList());

