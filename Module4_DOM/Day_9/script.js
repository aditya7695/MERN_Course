// class User{
//     constructor(username,email){
//         this.username=username;
//         this.email=email;
//     }
//     greet(){
//         console.log(`Hello ${this.username}`)
//     }
// }

// const user1 = new User("Aditya","ubaleaditya96@gmail.com")
// console.log(user1);
// console.log(user1.username);
// console.log(user1.email);
// user1.greet()


// class Student{
//     grade = "A+"
//     section = "C"
//     constructor(name,age,marks){
//         this.name = name;
//         this.age = age;
//         this.marks = marks;
//         if(marks>90){
//             this.grade = "A"
//         }
//         else if(marks>80){
//             this.grade = "B"
//         }
//         else if(marks>60){
//             this.grade = "C"
//         }
//         else if(marks<60){
//             this.grade = "F"
//         }
//     }
//     display(){
//         console.log(`Name:${this.name} , Age:${this.age} , Grade:${this.grade} , Section:${this.section}`);
//     }
// }

// let student1 = new Student("Aditya",20,85);
// student1.display()
// console.log(student1);




// Getter and Setter

// class User {
//     constructor(name,age){
//         this._name = name;
//         this._age = age;
//     }

//     get age(){
//         return this._age;
//     }

//     set age(value){
//         if(value<0 || value>120){
//             console.log(("Invalid age")); 
//         }
//         else{
//             this._age = value
//         }
//     }
// }

// let user1 = new User("Aditya",20);
// console.log(user1._age);
// console.log(user1.age);
// user1.age =35;
// console.log(user1._age);

// Static Methods
// class User{
//     constructor(name , role){
//         this.name=name;
//         this.role=role;
//     }

//     static createAdmin(name){
//         return new User(name,'Admin')
//     }

//     static createGuest(name){
//         return new User(name,'Guest')
//     }
// }

// const person1 = User.createAdmin('Aditya')
// const person2 = User.createGuest('Ashish')
// console.log(person1,person2);


class BankAccount{
    #balance; // private feild
    constructor(name,initialBalance){
        this.name = name;
        this.#balance=initialBalance;
    }
    deposite(amt){
        this.#balance += amt
    }
    getBalance(){
        return this.#balance
    }
}

let user1 = new BankAccount("Aditya",50000)
user1.deposite(3333);
console.log(user1.getBalance());






























