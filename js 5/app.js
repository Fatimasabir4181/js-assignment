// chapter 21-25

// Q1

// var Firstname =+prompt("Firstname")
// var Lastname =+prompt("Lastname")
// var Fullname =+prompt("HELLO SIR/MA'AM\nFullname")

// Q2

//  var favoriteModel = prompt("What's your favorite mobile phone model?");
//     var inputLength = favoriteModel.length;
//     document.write("My favorite phone is " ,favoriteModel,"<br>", "The length of string is: " + inputLength);

// Q3

// var word="pakistani"
// var index=word.indexOf("n")

// console.log(" index of 'n''is:"+index);

// Q4

// var word="Hello World"
// var index=word.indexOf("l")
// console.log(" index of 'l'is:"+index);

// Q5

// var word="pakistani"
// var index=word.indexOf("i")

// console.log("character at index "+index,':i');

// Q6

// var Firstname =prompt("Firstname")
// var Lastname =prompt("Lastname")
// var Fullname = Firstname +" " + Lastname

// console.log(Fullname );

// Q7
// var userinput=("hyderabad")
// .replace("hyder","islam")
// console.log(userinput);

// Q8



// Q9
// var num1=(typeof "472")
// console.log(num1);
// var num2=(typeof 472)
// console.log(num2);

// Q10

// var userinput=prompt("enter a value").toUpperCase()
// document.write(userinput);

// Q11

// var userinput=prompt("enter a value")
// var firstinput=userinput.slice(0,1).toUpperCase()
// var secondinput=userinput.slice(1).toLowerCase()
// var finalinput=firstinput+secondinput
// document.write(finalinput);

// Q12

// var num=(35.36)
// console.log(Math.ceil(num))

// Q13

// var username = prompt("Enter a username:");
// if (!username==="@"||"."||""||"!") {
//     alert("Please enter a valid username");
//     username = prompt("Enter a username:");
//     if (username==="@"||"."||""||"!") {
//     alert("Thank You");
//     }
// }
// console.log("Username:", username);

// Q14

// var items=["cake", "apple pie", "cookie", "chips", "patties"].toLowerCase()
// var input=prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?")
// condition=false
// for(var i=0;i<items;i++){
//     if (items[i]===input) {
//  condition===true       
//  alert("is available at index " + i + " in our bakery")
//     }

// }
// if (!condition) {
//     alert(input + " is not available in our bakery");
// }

//Q15
// var input=prompt("Enter Password").toLowerCase()
// var password=['!','@','#','$','&','*',0,1,2,3,4,5,6,7,8,9, "a, b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"]
// var condition=false
// for(var i=0;i<password.length;i++){
// if (input==='!','@','#','$','&','*' && input===0,1,2,3,4,5,6,7,8,9 && input==='a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',input===password[i]) {
//     condition=true
//     alert("thank you")
// }
// }
// if (condition===false) {
//     alert("enter valid password")
// }
// console.log(input);

// Q16

// var university = "U";
// console.log(university);
// var university = "n";
// console.log(university);
// var university = "i";
// console.log(university);
// var university = "v";
// console.log(university);
// var university = "e";
// console.log(university);
// var university = "r";
// console.log(university);
// var university = "s";
// console.log(university);
// var university = "i";
// console.log(university);
// var university = "t";
// console.log(university);
// var university = "y";
// console.log(university);
// var university = "o";
// console.log(university);
// var university = "f";
// console.log(university);
// var university = "k";
// console.log(university);
// var university = "a";
// console.log(university);
// var university = "r";
// console.log(university);
// var university = "a";
// console.log(university);
// var university = "c";
// console.log(university);
// var university = "h";
// console.log(university);
// var university = "i";
// console.log(university);

// Q17

// var input = prompt("Enter some text:");
// var lastChar = input.charAt(input.length - 1);
// document.write("User input: " + input + "<br>Last character of input: " + lastChar);



// Q18

// document.write("The quick brown fox jumps over the lazy dog","<br>")
// document.write("There are 2 occurrence(s) of word 'the '");

// chapter 25-30

// Q1
// var num=3.45214
// console.log(num);
// var num1=Math.round(Math.random())
// console.log(num1);
// var num2=Math.floor(Math.random())
// console.log(num2);
// var num1=Math.ceil(Math.random())
// console.log(num1);

// Q2

// var num=-2.673
// console.log(num);
// var num1=Math.round(Math.random())
// console.log(num1);
// var num2=Math.floor(Math.random())
// console.log(num2);
// var num1=Math.ceil(Math.random())
// console.log(num1);

// Q3

// var num=4
// console.log("The absolute number value of -4 is 4");

// Q4

// var randomnum=Math.random()
// console.log(randomnum);

// Q5

// var input1=+prompt("Fatima enter 1 or 2")
// var input2=+prompt("Mariam enter 1 or 2")
// var randomnum=Math.round(Math.random()*2)

// if (input1===randomnum) {
//     alert("FATIMA WON")
// }
// if (input2===randomnum) {
//     alert("MARIAM WON")
// }

// Q6

// var input=+prompt("Enter a number between 1-100")
// var randomnum=Math.round(Math.random()*100)
// console.log(input);
// console.log(randomnum);

// Q7

// var userInput = prompt("Enter your weight in kilograms");
//     var weight = parseFloat(userInput.replace(/[^0-9.]/g, ''));
//     if (!isNaN(weight)) {
//         document.body.innerHTML = "Your weight is: " + weight + " kilograms";
//     } else {
//         document.body.innerHTML = "Invalid input. Please enter a valid number.";
//     }

    // Q8

    // var input=+prompt("Enter a number between 1-10")
// var randomnum=Math.round(Math.random()*10)
//     if (randomnum===input) {
//     alert('CONGRATULATIONS')
// }
//     else {
//     alert('SORRY')
// }


















