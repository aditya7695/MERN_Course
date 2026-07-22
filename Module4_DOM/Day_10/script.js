// Abstraction is hiding internal implementation details and  exposing only necessary interface .
// private feilds and public feilds

// class DataComparison{
//     publicData = "I am public data";
//     #privateData = "I am private data";

//     publicMethod(){
//         console.log("public mrthod called");
//         this.#privateMethod()
        
//     }
//     #privateMethod(){
//         console.log("private method called");
//         console.log(this.#privateData);
//     }
//     textAccess(){
//         console.log(this.publicData);
//         console.log(this.#privateData);
//         this.#privateMethod();
//         this.publicMethod();
//     }
// }

// const obj = new DataComparison();
// // console.log(obj.publicData);
// // obj.publicMethod();
// obj.textAccess()


// DOM in classes

// class Card {
//     constructor(title,content){
//         this.title = title;
//         this.content = content;
//         this.element = null;
//     }
//     render(parentId){
//         this.element = document.createElement('div');
//         this.element.className = 'card';
//         this.element.innerHTML = `<h3>${this.title}</h3> <p>${this.content}</p>`;
//         const parent = document.getElementById(parentId);
//         parent.appendChild(this.element)
//     }
//     remove(){
//         this.element.remove()
//     }
// }

// const card1 = new Card("Title 1","Content 1 sjkdafgbdjdhb kdashjbxmbh ioh sdluku hkjhg vkzdhf jkhsd vs fvdjshkv f jhkfsdbmn")
// card1.render("container")


// class inheritance
// parent class

// class Animal{
//     constructor(name){
//         this.name = name;
//     }
//     speak(){
//         console.log(`${this.name} Makes a sound `);
//     }
// }

// class Dog extends Animal{

//     bark(){
//         console.log(`${this.name} barks`);
//     }
// }

// const dog = new Dog("Buddy")
// dog.bark()

// super() : the super calls keyword calls the parent 
// constructor and most he called before 
// accesing this in child class


// class Person{
//     constructor(name,age){
//         this.name = name
//         this.age = age
//     }

// }

// class Student extends Person{
//     constructor(name,age,gender){
//         super(name,age)
//         this.gender = gender;
//     }

//     study(){
//         console.log(`${this.name} Having age ${this.age} and Gender ${this.gender} is Studying`);
//     }
// }

// const student1 = new Student("Aditya",21,"Male")
// student1.study()


// accessing parent class methods in the child class

// class Phone{
//     constructor(brand) {
//         this.brand = brand
//     }
//     call(){
//         console.log(`${this.brand} calling you`);
//     }
// }

// class SmartPhone extends Phone{
//     constructor(brand){
//         super(brand);
//     }
//     photo(){
//         console.log(`${this.brand} take photo`);
//     }
// }

// const phone1 = new SmartPhone("Apple");
// phone1.photo()
// phone1.call()


// class Phone {
//   #price;
//   constructor(brand, price) {
//     this.brand = brand;
//     this.#price = price;
//   }
//   call() {
//     console.log(`${this.brand} calling you`);
//   }
//   getPrice() {
//     return this.#price;
//   }
// }

// class SmartPhone extends Phone {
//   constructor(brand, price) {
//     super(brand, price);
//   }
//   photo() {
//     console.log(`${this.brand} take photo`);
//     console.log(`price of the phone is ${this.getPrice()}`);
//   }
// }

// const phone1 = new SmartPhone("Apple", 50000);
// phone1.photo();
// phone1.call();


// Abstraction

// class CoffeeMachine{
//     #boilWater()
//     {
//         console.log("Water is boiling");
//     }
//     #brew()
//     {
//         console.log("brewing");
//     }
//     makeCoffee(){
//         this.#boilWater()
//         this.#brew()
//         console.log("Coffee is ready");
//     }
// }

// const machine = new CoffeeMachine();
// machine.makeCoffee()

// Polymorphism - Method overriding

// class Animal{
//     makeSound(){
//         console.log("Some Sound");
//     }
// }
// class Dog extends Animal{
//     makeSound(){
//         console.log("Bhu bhuuu");
//     }
// }
// class Cat extends Animal{
//     makeSound(){
//         console.log("Meowww");
//     }
// }


// const dog = new Dog()
// dog.makeSound()

// const cat = new Cat()
// cat.makeSound()


class Vehicle{
    start(){
        console.log("Engine is starting");
    }
}

class Car extends Vehicle{
    start(){
        super.start();
        console.log("Car is ready to run");
    }
}

const car = new Car()
car.start()