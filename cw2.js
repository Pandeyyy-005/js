//q1
// const fruits=["apple","mango","banana"]
// const [a,m,b]=fruits
// console.log(m);
// const student={
//     name:"tom",
//     age:19,
//     course:"js"
// }
// const {name,age,course}=student
// console.log(course);

//q2
// class Emp{
//     name;
//     id;
//     sal;
//     constructor(name,id,sal){
//         this.name=name
//         this.sal=sal
//         this.id=id
//     }
//     displayInfo(){
//         console.log(this.name+" "+this.id+" "+this.sal);
        
//     }
// }
// const e=new Emp("jerry",12,12900)
// e.displayInfo()

// //q3
// function student(marks) {
// return new Promise((resolve, reject) => {
//     if (marks>=40) {
//         resolve ("student passed")
//     } else {
//         reject("student fail")
//     }
// });}
// student(30)
// .then((result) => {
//     console.log(result);
    
// }).catch((err) => {
//     console.log(err);
    
// });

//q4
// function displayHis(details) {
// return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         if (details) {
//             resolve(            [
//                     {
//                         name:"tom",
//                         orderId:1201,
//                         products:["p1","p2","p3"]
//                     }
//                 ])

//         } else {
//            reject("error occured") 
//         }
//     },1000)
// });
        
// }
// async function check() {
//     try {
//     let data=await displayHis(false)//to displayHis->data
//     console.log(data);
    
// } catch (error) {
//     console.log(error);
// }
// }
// check()

//q5
function calculateTotal(total, ...price) {

    for (let p of price) {
         total+=p
    }

    return total  
}

let result = calculateTotal(5, 100, 200, 300);
console.log(result);

//q6
// function validateAge(age) {
// try {
//         if (age<18) {
//         throw new Error ("Invalid Age");
        
//     } else {
//         console.log("Age is valid..");
        
//     }
// } catch (error) {
//     console.log(error.name+":"+error.message);
    
// }
// }
// validateAge(12)

//q7
function meth() {
    console.log(i);
    
}
function meth1() {
    meth()
}
function meth2() {
    try {
        meth1()
    } catch (error) {
        console.log(error.name+":"+error.message);
        
    }
}
meth2()

//q8
function validateAge(age) {
try {
        if (age<18) {
        throw new Error ("Invalid Age");
        
    } else {
        console.log("Age is valid..");
        
    }
} catch (error) {
    console.log(error.name+":"+error.message);
    
}
finally{
    console.log("ended");
    
}
}
validateAge(12)

//q9
class validateAge extends Error {
constructor(mg){//it store err msg
    super(msg)//display err msg from parent class
    this.name="validateAge"//bydefault display only error,validateAge=error name
}
}
function isValid(age) {
    if (age<18) {
        try {
            throw new validateAge("Age is <18")
        } catch (error) {
            console.log(error.name+":"+error.message);
            
        }
    } else {
       console.log("age is valid..");
        
    }
}
isValid(19)

//q10
// function validateAge(age) {
// try {
//         if (age<18) {
//         throw new Error ("Invalid Age");
        
//     } else {
//         console.log("Age is valid..");
        
//     }
// } catch (error) {
//     console.log(error.name+":"+error.message);
    
// }
// }
// validateAge(12)
