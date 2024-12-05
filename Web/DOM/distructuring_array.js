// distructuring object 

const person = {
  name: "John",
  age: 32,
  address: {
    city: "Dhaka",
    country: "Bangladesh",
  },
};

console.log(person.name); // output: John
console.log(person.address) // output: { city: 'Dhaka', country: 'Bangladesh' }
console.log(person.address.city) // output: Dhaka

// now distructing the object
const { name, age } = person;
console.log(name, age); // output: John 32.


// array distructuring
const numbers = [1, 2, 3, 4, 5];

console.log(numbers[0]); // output: 1

const [first, second] = numbers;
console.log(first, second); // output: 1 2 
