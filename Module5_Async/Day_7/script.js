

// class User{
//     constructor (name,age){
//         this.name = name;
//         this.age = age;

//     }
// }
// function printName(user){
//     console.log(`USer name is : ${user.name}`);
// }
// function printAge(user){
//     console.log(`User age is : ${user.age}`);
// }

// // you can use only one export default in the script
// export default User;

// // this is named export
// export {printName , printAge};


// Inline export
export default class User{
    constructor (name,age){
        this.name = name;
        this.age = age;

    }
}
export function printName(user){
    console.log(`USer name is : ${user.name}`);
}
export function printAge(user){
    console.log(`User age is : ${user.age}`);
}
