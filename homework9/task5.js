
const users = [
    {
    name:"Maria",
    email:"maria@gmail.com",
    age: 20      
    },
    {
    name:"Oleg",
    email:"oleg@gmail.com",
    age:23 
    },
    {
    name:"Ivan",
    email:"ivan@gmail.com",
    age:19
    }
]
for (const {name, email, age} of users) {
    console.log(`Name: ${name}, Email: ${email}, Age: ${age}`);
   }