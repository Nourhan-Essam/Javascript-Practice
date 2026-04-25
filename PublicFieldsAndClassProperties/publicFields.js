class Student{
    name = "Unknown";
    grade = 0;

    introduce(){
        console.log(`${this.name} score is ${this.grade}`);
    }
    promote(){
        this.level = "Next Level";
    }

}

const s1 = new Student();
const s2 = new Student();
s1.introduce();  //Unknown score is 0
s2.introduce(); //Unknown score is 0

console.log(s1.level); //undefined
s1.promote();
console.log(s1.level); //Next Level