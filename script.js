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