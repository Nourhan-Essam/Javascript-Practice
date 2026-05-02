class Vehicle {
    move(){
        return "The vehicle moves";
    }
}
class Car extends Vehicle{
    move(){
        return "The car drives";
    }
}
class Plane extends Vehicle{
    move(){
        return super.move() + " and flies in the sky";
    }
}
const vehicles = [new Car(), new Plane()];
vehicles.forEach(v => {
    console.log(v.move());
}); //The car drives && The vehicle moves and flies in the sky