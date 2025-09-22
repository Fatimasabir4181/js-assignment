// chapter 31-34

// Q1

// var date = new Date 
// console.log(date);

// Q2

// var month=[
// "January",
// "February",
// "March",
// "April",
// "May",
// "June",
// "July",
// "August",
// "September",
// "October",
// "November",
// "December",
// ]
// var newmonth =month[11]
// console.log(newmonth);

// Q3

// var day =prompt("ENTER DAY")
// var print = day.slice(0,3)
// console.log(print);

// Q4

// var day =prompt("ENTER DAY")
// if (day==="Saturday" || day==="Sunday") {
//     alert("It’s Fun day")
// }
// else{
//     alert("It’s working day")
// }

// Q5

// var day ="1"
// if (day < 16) {
// alert("starting days")
// }
// else{
// alert("Last days of the month")
// }

// Q6

// var date = new Date();
// milisec = d.getTime();
// minutes = Math.floor(ms / 60000);
// console.log(minutes);
// Q7

// var time ="11"
// if (time <= 12 ){
// alert("Its AM")
// }
// else{
// alert("Its PM")
// }

// Q8

// const laterDate = new Date(2020, 11, 31);
// console.log(laterDate);

// Q9

    // var ramadanStart = new Date("June 18, 2015");
    // var today = new Date();
    // var diff = today.getTime() - ramadanStart.getTime();
    // var daysPassed = Math.floor(diff / (1000 * 60 * 60 * 24));
    // console.log("171 passed since 1st Ramadan (June 18, 2015): " + daysPassed);

// Q10

    // var referenceDate = new Date();          
    // var beginning2015 = new Date("January 1, 2015");
    // var diff = referenceDate.getTime() - beginning2015.getTime();
    // var secondsElapsed = Math.floor(diff / 1000);
    // document.write("Seconds elapsed between Jan 1, 2015 and reference date: " + secondsElapsed);

// Q11

// var now = new Date();  
//     var hours = now.getHours();
//     now.setHours(hours + 1);  
//     document.write("Date one hour ahead: " + now);

// Q12

    // var today = new Date();
    // today.setFullYear(today.getFullYear() - 100);
    // alert("Date 100 years back: " + today);

// Q13

//    let age = prompt("Enter your age:");
//     let currentYear = new Date().getFullYear();
//     let birthYear = currentYear - age;
//     document.write("<h3>Your Birth Year is: " + birthYear + "</h3>");


// Q14

// var customerName="Fatima Sabir"
// var month="september"
// var unit = 410
// var chargesPerUnit=16

// var NetAmountPayable=(unit*chargesPerUnit).toFixed(2)
// var LatePaymentSurcharge=(NetAmountPayable*0.1).toFixed(2)
// var GrossAmountPayable=(parseFloat(NetAmountPayable) + parseFloat(LatePaymentSurcharge)).toFixed(2)

// document.write("<h2>K-Electric Bill</h2>")
// document.write("customerName:" +customerName+ "<br>")
// document.write("month:" +month+ "<br>")
// document.write("unit:" +unit+ "<br>")
// document.write("chargesPerUnit:" +chargesPerUnit+ "<br>")
// document.write("NetAmountPayable:" +NetAmountPayable+ "<br>")
// document.write("LatePaymentSurcharge:" +LatePaymentSurcharge+ "<br>")
// document.write("GrossAmountPayable:" +GrossAmountPayable+ "<br>")


// chapter 35-38

// Q1

// var date = new Date
// console.log(date);

// Q2

// var firstname=prompt("Enter FirstName")
// var lastname=prompt("Enter lastName")
// var FullName=firstname+" "+lastname
// console.log(FullName);

// Q3

// var firstnum=+prompt("Enter FirstNum")
// var secondnum=+prompt("Enter SecondNum")
// var sum=firstnum+secondnum
// console.log(sum);

// Q4

// var num1=+prompt("Enter FirstNum")
// var num2=+prompt("Enter SecondNum")
// var operation=prompt("Enter Operation")
// if (operation==="+") {
//     console.log+(num1+num2);
// }
// else if (operation==="-") {
//     console.log(num2-num1);
// }
// else if (operation==="*") {
//     console.log(num1*num2);
// }
// else if (operation==="/") {
//     console.log(num1/num2);
// }
































































