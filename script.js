// 1 Hoisting Bug
var a = 10;
// console.log(a);


// 2. let vs var Scope
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    // console.log(i);
  }, 100);
}


// 3. Incorrect Equality
// console.log([] == false);



// 4. Missing Return
function sum(a, b) {
  return a + b;
}

// console.log(sum(2, 3));



// 5. Reference vs Primitive
const arr1 = [1, 2, 3];
const arr2 = [...arr1];

arr2.push(4);
console.log(arr2);