class Employee{
    constructor(name){
        this.name = name;
    }
    getRole(){
        return "Employee";
    }
}
class Manager extends Employee{
    constructor(name, department) {
        super(name);
        this.department = department;
    }
    getRole(){  
        return super.getRole() + "(Manager)";
}
}

const e = new Manager("ali", "IT");
console.log(e.name);          //ali
console.log(e.department);   //IT
console.log(e.getRole());   //Employee (Manager)
