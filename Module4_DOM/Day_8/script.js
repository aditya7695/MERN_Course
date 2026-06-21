// // Note when we pass  callback function as a function declaration
// // then this will be in your window object but you can fix it using arrow function
// // Arrow function do not have their own this they borrow it form the enclosing objct

// // const user = {
// //     name : "Kavita",
// //     hobbies : ["reading","Gaming","coding"],

// //     // showHobbies : function(){
// //     //     this.hobbies.forEach(function(hobby){
// //     //         console.log(this.name+" likes "+hobby);
// //     //     })
// //     // }
// //     showHobbies : function(){
// //         this.hobbies.forEach((hobby)=>{
// //             console.log(this.name + " likes " + hobby);
// //         })
// //     }
// // }
// // user.showHobbies();

// // function Person(name,age,city){
// //     this.name = name;
// //     this.age = age;
// //     this.city = city;
// // }

// // const Person1 = new Person("Aditya",21,"Pune")
// // const Person2 = new Person("Aditya",21,"Pune")
// // const Person3 = new Person("Aditya",21,"Pune")
// // const Person4 = new Person("Aditya",21,"Pune")
// // const Person5 = new Person("Aditya",21,"Pune")

// // console.log(Person1,Person2,Person3,Person4,Person5);

// // function User(username,email,role){
// //     this.username = username;
// //     this.email = email;
// //     this.role = role || "user";
// //     this.isActive = true;
// //     this.accountCreated = Date.now()
// // }

// // const user1 = new User("Aditya","ubaleaditya96@gmail.com","Admin")
// // console.log(user1);

// function Calculator(brand){
//     this.brand = brand;
//     this.currentValue = 0;
//     this.add = function(num){
//         this.currentValue = this.currentValue + num
//         return this.currentValue
//     }
//     this.reset = function(){
//         this.currentValue = 0;
//     }
// }

// const calc1 = new Calculator("Casio")
// console.log(calc1.add(10));
// console.log(calc1.add(10));
// console.log(calc1.add(10));
// console.log(calc1.add(10));
// console.log(calc1.add(10));
// console.log(calc1.add(10));
// console.log(calc1.add(10));
// console.log(calc1.add(10));
// console.log(calc1.add(10));
// console.log(calc1.add(10));
// console.log(calc1.add(10));
// console.log(calc1.add(10));
// console.log(calc1.add(10));
// console.log(calc1.add(10));
// console.log(calc1.add(10));
// console.log(calc1.add(10));
// calc1.reset()
// console.log(calc1.add(55));

//  task create

function Rectangle(length, width) {
  this.length = length;
  this.width = width;
  this.getArea = function () {
    return this.length * this.width;
  };
  this.getPerimeter = function () {
    return (perimeter = 2 * (this.length + this.width));
  };
  this.isSquare = function () {
    if (this.length == this.width) {
      return true;
    } else {
      return false;
    }
  };
}

const result = new Rectangle(10, 2);
console.log(result.getArea());
console.log(result.getPerimeter());
console.log(result.isSquare());


function BankAccount(owner , balance){
    this.owner = owner;
    this.balance = balance;

    this.checkBalance= function(){
        return this.owner + " Balance is " + this.balance;
    }

    this.deposit= function(amount){
        this.balance += amount
    }

    this.withdrawl = function(amount){
        this.balance = this.balance - amount;
    }
}

const acc1 = new BankAccount("Aditya",10000)

let deposit1 = BankAccount.deposit.bind(acc1)
deposit1(1000)
console.log(deposit1);
// function Car(brand,model){
//     this.brand=brand;
//     this.model=model;
// }

// Car.prototype.displayInfo = function(){
//     return this.brand + " " + this.model
// }

// let car1 = new Car("Tata","Tiago")
// console.log(car1.displayInfo());
// let car2 = new Car("Tata","Safari")
// console.log(car2.displayInfo());
// let car3 = new Car("Tata","Harrier")
// console.log(car3.displayInfo());
// let car4 = new Car("Tata","Sierra")
// console.log(car4.displayInfo());

// console.log(car1.displayInfo);

function Animal(name){
    this.name =name;
    this.species = "Generic species"
}

Animal.prototype.makeSound = function(){
    return this.name + " makes bhu bhu sound";
}
Animal.prototype.setAge = function(value){
    this.age = value
}

let dog = new Animal("Buddy")

console.log(dog.makeSound());
dog.setAge(15);
console.log(dog.age);