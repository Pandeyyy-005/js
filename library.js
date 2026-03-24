export const libraryName="abc"
export function listBooks(count) {
    console.log(`total ${count} books are available `);
    
}
export class Book{
name;
price;
constructor(name,price){
    this.name=name
    this.price=price
}
displayInfo(){
    console.log(`${this.price} is price of ${this.name}`);
    
}
}
