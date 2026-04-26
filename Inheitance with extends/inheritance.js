class Vehicle{
    move(){
        return "Vehicle is moving.";
    }
}
class Car extends Vehicle{
    drive(){
        return "Car is moving.";
    }
}
class Bike extends Vehicle{
    move(){
        return "Bike is moving.";
    }
}
const car = new Car();
const bike = new Bike();
console.log(car.move());                  //Vehicle is moving.
console.log(car.drive());                //Car is moving.
console.log(bike.move());               //Bike is moving.
console.log(car instanceof Vehicle);   //true
console.log(car instanceof Car);      //true
console.log(bike instanceof Vehicle);//true
console.log(bike instanceof Car);   //false