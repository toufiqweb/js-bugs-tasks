// // 1 Hoisting Bug
// var a = 10;
// // console.log(a);


// // 2. let vs var Scope
// for (let i = 0; i < 3; i++) {
//   setTimeout(() => {
//     // console.log(i);
//   }, 100);
// }


// // 3. Incorrect Equality
// // console.log([] == false);



// // 4. Missing Return
// function sum(a, b) {
//   return a + b;
// }

// // console.log(sum(2, 3));



// // 5. Reference vs Primitive
// const arr1 = [1, 2, 3];
// const arr2 = [...arr1];

// arr2.push(4);
// // console.log(arr2);



// //6 Async Execution Order

// // console.log('A');

// setTimeout(() => {
// //   console.log('B');
// }, 0);

// // console.log('C');


// // 7
// const person = {
//   name: 'Alex',
//   greet() {
//     setTimeout( ()=> {
//       console.log(this.name);
//     }, 100);
//   }
// };

// person.greet();



// // 8. Array Map Bug

// const nums = [1, 2, 3];

// const result = nums.map(num => {
//   return num * 2;
// });

// // console.log(result);






// // 9 Mutation Bug


// // function updateUser({...user}) {
// //   user.name = 'John';
// // }

// // const person = { name: 'Alex' };
// // updateUser(person);

// // console.log(person.name);


// 10. 10. Incorrect Default Value
// function greet(name ="Guest") {
//   // name = name && 'Guest';
//   return `Hello ${name}`;
// }

// console.log(greet(''));


// 11
// console.log(typeof(NaN) === typeof(NaN));
// console.log(toString(NaN) === toString(NaN));

// console.log(Number.isNaN(NaN));


// 12
// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++
// }


// 13
// const obj = {};
// const key1 = { id: 1 };
// const key2 = { id: 2 };
// obj[`${key1.id}`] = 'Hello';
// obj[`${key2.id}`] = 'World';
// console.log(obj[`${key1.id}`]);

// console.log(obj);


// 14
// function fetchData() {
//   return Promise.resolve('Data');
// }
// fetchData().then(console.log);



// 15
// const user = { name: 'Alex', address: { city: 'Dhaka' } };
// const copy = { ...user};
// const copy2 = { ...copy.address};
// copy2.city = 'Chittagong';
// console.log(user.address.city);