//Pre-Increment (++)
//1
let count = 0 ;
for (let i = 0; i < 5; ++i);
console.log(++count);
//2
let age = ++count;
console.log("Age",age);
console.log("Count:",count);
//3
let total = 10 + ++count;
console.log("Total:",total);
console.log("Count:",count);
//4
let person = { age: 20 };
person.age = ++person.age; 
console.log("Person's age:", person.age);



//Post-Increment (++) 
//1
let num = 0;
for (let i = 0; i < 5; i++) {
  console.log(num++);
}
//2
let originalNum = num++;
console.log("originalNum:", originalNum );
console.log("Nun:", num);
//3
let data = 10 + num++;
console.log("Data:", data );
console.log("Nun:", num); git