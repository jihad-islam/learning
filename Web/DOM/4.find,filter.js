/* 
  object er array theke kono ekta object khuje ber korte hole find function use kora hoy. and multiple object khuje ber korte hole filter function use kora hoy.
*/


// find function

const products = [
  { id: 1, name: "laptop", price: 3200, brand: "lenovo", color: "silver" },
  { id: 2, name: "phone", price: 300, brand: "iphone", color: "golden" },
  { id: 3, name: "watch", price: 30, brand: "casio", color: "black" },
  { id: 4, name: "sunglass", price: 300, brand: "rayban", color: "black" },
  { id: 5, name: "camera", price: 300, brand: "canon", color: "black" },
];

// showing all products using for loop
// for (let i = 0; i< products.length; i++) {
//     console.log(products[i]);
// }

// showing the id 3 product using for loop
// for (let i = 0; i< products.length; i++) {
//     if (products[i].id === 3) {
//         console.log(products[i]);
//     }
// }

// showing the id 3 product using find function
const result = products.find(x => x.id === 3);
console.log(result); // ekhane id 3 bole kichu na thakle undefined dekhabe. 

// filter function
const result2 = products.filter(x => x.color === "black");
console.log(result2); // ekhane black color er shob gula product gula show korbe. jodi kichu na thake tahole empty array dekhabe.