//q1
// const products=[
//    { name:"p1",
//     sal:12900},
    
//    { name:"p2",
//     sal:12900},
    
//    { name:"p3",
//     sal:12900},
    
// ]
// const [p1,p2,p3]=products
// console.log(p3);

// const products={
//     name:"p1",
// price:1260
// }
// const {name,price}=prod
// console.log(price);
//q2
// class products{
//     name;
//     productId;
//     price;
//     constructor(name,productId,price){
//         this.name=name
//         this.productId=productId
//         this.price=price
//     }
//     displayDetails(){
//         console.log(this.name+" "+this.productId+" "+this.price);
        
//     }
    
// }
// const p=new products("p1",1,1250)
// p.displayDetails()
//q3
// function product(details) {
//     return new Promise((resolve, reject) => {
//         if (details) {
//             resolve(
//                 [{name:"p1",price:1260,availability:"yes"},
//                 {name:"p2",price:120,availability:"yes"}
// ]
//             )
//         } else {
//             reject("product is not available")
//         }
//     });
// }
// product(true)
// .then((result) => {
//     console.log(result);
    
// }).catch((err) => {
//     console.log(err.name+":"+err.message);
    
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
function calculateTotal(tax = 5, ...price) {
    let total = 0;

    for (let p of price) {
        total += p;  
    }

    return total + tax;  
}

let result = calculateTotal(5, 100, 200, 300);
console.log(result);

//q6
// function payment(status) {
//     try {
//         if (status) {
//             console.log("payment is successful");
            
            
//         } else {
//             throw new Error("payment fail");
            
//         }
//     } catch (error) {
//         console.log(error.name+":"+error.message);
        
//     }
// }
// payment(true)
//q7
// function cart1(stock) {
//     if (stock<=0) {
//         throw new Error("out of stock");
        
        
//     } else {
//         console.log("stock is available");
        
//     }
// }
// function cart2() {
//     cart1(0)
// }
// function cart3() {
//     try {
//         cart2()
//     } catch (error) {
//         console.log(error.name+":"+error.message);
        
//     }
// }
// cart3()
//q8
// class Profile{
//     name;
//     password;
//     Mob;
//     constructor(name,password,Mob){
//         this.name=name
//         this.password=password
//         this.Mob=Mob
//     }
// }
// const p=new Profile("tom","abc123",)
// try {
//     if (!p.name || !p.Mob || !p.password) {//! check whether is empty / null / undefined
//         throw new Error("profile is not completed");
        
//     } else {
//         console.log("profile is succesfully completed");
        
//     }
// } catch (error) {
//     console.log(error.name+":"+error.message);
    
// }
// finally{
// console.log("ended successfully");

// }
//q9
// class invalidCouponCode extends Error{
//     constructor(msg){
//         super(msg)
//         this.name="invalidCouponCode"
//     }
// }
// function isValidCouponCode(code) {
//     try {
//         if (code%2==0) {
//             throw new invalidCouponCode("coupon code is not valid")
//         } else {
//             console.log("coupon code is valid");
//         }
//     } catch (error) {
//         console.log(error.name+":"+error.message);
        
//     }
// }
// isValidCouponCode(18)
//q10
// function inventory(prodQty) {
//     try {
//         if (prodQty<=5) {
//             throw new Error("product qty is <5")
//         } else {
//             console.log("product qty is >5");
            
//         }
//     } catch (error) {
//         console.log(error.name+":"+error.message);
        
//     }
// }
// inventory(4)

