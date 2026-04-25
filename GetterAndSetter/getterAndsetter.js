class Product{
    constructor(price){

        this._price = price;
    }
    get price (){
     return this._price;   
    }
    
    set price(value){
        if (value < 0){
            throw new Error ("Price cannot be negative");
        }
        this._price = value;
    }
}


const p = new Product(10);
console.log(p.price); //10
p.price = 150;
console.log(p.price); //150
// p.price = -20; => Price cannot be negative