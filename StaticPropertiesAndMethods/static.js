class Calculator{
    static version = "1.0";
    static add(a, b){
        return a + b;
    }
    static multiply(a, b){
        return a * b;
    }
}
console.log(Calculator.version);          //1.0
console.log(Calculator.add(1,2));        //3
console.log(Calculator.multiply(2, 4)); //8

const calc = new Calculator();
calc.add(1,2);  //Error because add() is static and belongs to class, not instance