function Car(brand){
    this.brand = brand;
}
Car.prototype.drive = function(){
    console.log(this.brand + " is driving");
}

class Car{
    constructor(brand){
        this.brand = brand;
    }
    drive(){
        console.log(this.brand + " is driving");
    }
}
class ElectricCar extends Car{
    charge(){
        console.log("charging...");
    }
}
const ec = new ElectricCar("Tesla");
ec.drive(); //Tesla is driving
ec.charge(); //charging...

console.log(Car.prototype.drive); /*ƒ drive(){
        console.log(this.brand + " is driving");
    }*/

        