// chapter 17-20

// Q1

// var array=[]
// array=[1,2,3,4,5]
// console.log(array);

// Q2

// var number=[
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ]
// for(var i=0; i<number.length;i++){
// console.log(number[i]);
// }

// Q3

// var a=[]
// for (a=1; a<=10; a++){
// document.write(a ,"<br>");
// }

// Q4

// var table =+prompt("ENTER NUMBER")
// var range =+prompt("ENTER RANGE")
// for(i=1;i<=range;i++){
//     document.write(table,"x",i,"=",table*i,"<br>")
// }

// Q5

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (var i = 0; i < fruits.length; i++) {
//     document.write("Element at index " + i + " is " + fruits[i],"<br>");
// }

// Q6

// document.write("Counting:","<br>")

// var a=[]
// for (a=1; a<=15; a++){
// document.write(a ,"<br>");
// }

// document.write("Reverse Counting:","<br>")

// var a=[]
// for (a=10; a>=1; --a){
// document.write(a ,"<br>");
// }

// document.write("Even Counting:","<br>")

// var evencounting = []
// for (var i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     evencounting += i + (i < 20 ? ", " : "","<br>");
//   }
// }
// document.write(evencounting);

// document.write("Odd Counting:","<br>")

// var oddcounting = []
// for (var i = 1; i <= 20; i++) {
//   if (i % 2 === 1) {
//     oddcounting += i + (i < 20 ? ", " : "","<br>");
//   }
// }
// document.write(oddcounting);

// document.write("Series:","<br>")

// var Series = []
// for (var i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     Series += i + (i < 20 ? ", " : "","<br>");
//   }
// }
// document.write(Series);

// // Q7

// var bakery =prompt("Welcome to ABC Backery. what do you want to order").toLocaleLowerCase();
// var bakeryitem =["cake", "apple pie", "cookies", "chips", "paties"];
// var condition=false;
// for(var i=0; i < bakeryitem.length; i++){
//     if (bakery===bakeryitem[i]) {
//         condition=true;
//         console.log("available");
//     }
// }
// if (condition===false) {
//     console.log("not available");
// }

// Q8

// var A=[24,53,78,91,12]
// var largestnum=A[0]
// for (var i = 1; i < A.length; i++) {
//     if (A[i] > largestnum) {
//         largestnum = A[i];
//     }
// }
// console.log("The largest number in the array is: " + largestnum);

// Q9

// var A=[24,53,78,91,12]
// var smallestnum=A[0]
// for (var i = 1; i < A.length; i++) {
//     if (A[i] < smallestnum) {
//         smallestnum = A[i];
//     }
// }
// console.log("The smallest number in the array is: " + smallestnum);

// Q10

// var counting = []
// for (var i = 5; i <= 100; i++) {
//   if (i % 5 === 0) {
//     counting += i + (i < 100 ? ", " : "","<br>");
//   }
// }
// document.write(counting);


















