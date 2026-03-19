// //q1
// const student={
//     name:"tom",
//     grade:"A",
//     subject:"IT"
// }
// console.log(student.grade);
// //q2
// const calculateGrade=(score)=>{
// if(score>=90) return "A"
// else if(score>=75) return "B"
// else if(score>=65) return "C"
// else return "D"
// }
// console.log(calculateGrade(65));

// const marks =[80,40,20]
// const calgrad = marks.map((marks)=>{
//     if (marks>70) {
//         return "A"
//     } else if (marks>=40) {
//         return "B"
//     } 
//     else {
//         return "C"
//     }
// })
// console.log(calgrad);

// const m = marks.filter((marks)=>{
//     return marks>40
// })
// console.log(m);


// //q3
// const increaseMarks=function (marks=[15,14,10,13]) {
//     return  b=marks.map((m)=>{
//         return m+10
//     }) 
       
// }
// console.log(increaseMarks());


// //q4
// const studInfo={
//     name:"tom",
//     age:18,
//     grade:"A",
//     display:function () {
//         console.log("name:"+this.name+
//             "age:"+this.age+
//             "grade:"+this.grade
//         );
        
//     }
// }
// studInfo.display()
//q5
// const marks=[100,90,85,65,35,30]
// const studMarks=marks.reduce((tempMarks,finalMarks)=>{
//  return tempMarks=tempMarks+finalMarks
// })
// console.log(studMarks);
//q6
// const marks=[
//     {name:"tom",mark:80},
//     {name:"jerry",mark:70},
//     {name:"james",mark:88},
//     {name:"tom",mark:99},
//     {name:"tom",mark:80},
// ]
// const highMarks=marks.filter((m)=>{
//     return m.mark>80
// })
// console.log(highMarks);
//q7
const marks1=[
    {name:"tom",mark:80},
    {name:"jerry",mark:70},
    {name:"james",mark:88},
    {name:"tom",mark:99},
    {name:"tom",mark:80},
]
const total=marks1.map((m)=>{
    return m.mark
})
console.log(total);

