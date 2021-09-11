/*document.getElementById("idh1").innerHTML = "I am h1";
document.getElementById("idh3").innerHTML = "I am h3";
console.log("I am learning js");
document.write("'JS' file is connected ");
// document.write(67, 8.9);*/

//User iput
// var x;
// x = prompt("Enter your name: ");
// console.log(x);
// document.write(x);

/*
//var declare
var a;
var b;
a = 45;
b = "Maimuna";
console.log(a);
console.log(b);
a = "Maimuna";
b = a;
var c = a + b;
console.log(a);
console.log(b);
console.log(c);
var $a = 10;
console.log($a);
var _abc = 3;
console.log(_abc);
var ab27 = 4;
console.log(ab27);
//var should not start with number*/


/*
//const,keyword
const d = 2; //can't change

//arithmatic operators
//a++ = ++a
var g = 5;
var h = 7;
var j, k;

j = g++;
k = ++h;

console.log(j);
console.log(g);
console.log(k);
var l = g;
console.log(l);*/


//operator precedence

/*
//string operator
//STRING ALWAYS READ left to right
var line1 = " Hello ";
var line2 = 3;
console.log(line1 + line2 + 45);
console.log(45 + line2 + line1);
console.log("76" - "3");//substraction
console.log("76" + "3");//concatenate
var n = "76" - "Muna";//NaN
console.log(n);*/

/*
//comparison
console.log(4 == 4);
console.log(4 == 5);
console.log(4 == "4");
console.log(4 === "4");//comparison with dataType
console.log(4 != 5);
console.log(4 !== "4");
console.log(4 > 5);
console.log(6 >= 5);*/

/*
//logical operator
console.log(!4 == 4 || 3 == 4);
console.log(3 == 4 || 3 == 4);
console.log(4 < 4 && 3 > 4);
console.log(!false);
//conditional operator
var a = (1 > 8) ? "Hello" : "world";
console.log(a);*/

//assignment operator
//a = a + 12; a += 12; same

/*
//task 01
var num = prompt("Please enter a temperature: ");
var F = 9 / 5 * num + 32;
alert("Fahrenheit: " + F + " Degree");
console.log("Task complete!");
*/

//Data types
//Numbers
/*
var x;
x = 3.14;
x = 123e5; // e = 10**5 // 123* 10**5
console.log(x);
x = 0xBB;//hexa decimal
console.log(x);
var y = x.toString();
console.log(y);
x = 187;
y = x.toString(2);
console.log(y);
y = x.toString(16);
console.log(y);
x = 3.1416;
y = x.toPrecision(4);//convert to string
console.log(y);
x = 187;
y = x.toString();
var z = parseInt(y); //conver integer number
console.log(z);
y = "3.1416";
z = parseFloat(y);
console.log(z);
x = "3.1416";
y = parseFloat(x.toString());
console.log(y);
var v = "muna";
isNaN(v);
console.log(v);
x = "1234";
isNaN(x); //return false
*/

//string
/*
console.log('Hello world');
var x = "Hell0 \" world";
console.log(x);
x = "Hello \\ world";
console.log(x);

x = "Hello \t\t world";
console.log(x);

x = "Hello \nworld!";//\n= 1 chr
console.log(x);

console.log(x.length);

x = "Maimuna";
console.log(x[6]);
console.log(x.toUpperCase());
console.log(x.toLowerCase());

x = "    Maimuna  ";
console.log(x.trim());

x = "Maimuna";
console.log(x.slice(2, 5));
console.log(x.slice(-5, -1));
console.log(x.slice(-5));
console.log(x.substr(1, 3));
console.log(x.replace("Mai", "Nai"));

y = "ABC";
z = y.concat(x, "EFG", 123);
console.log(z);
*/

//Boolean
/*
var x = "Maimuna";
var y;//undefined,null,NaN

console.log(Boolean(x));
console.log(Boolean(y));
*/

//Array
/*
var countries = ["Bangladesh", "USA", "UK"];
console.log(countries[1]);
console.log(countries.length);
countries[1] = "japan"
console.log(countries[1]);
countries[3] = "Norway";
cnsole.log(countries);
countries[countries.length] = "sweden";
console.log(countries);

console.log(countries.push("china", "singapur"));
console.log(countries);
console.log(countries.pop());
console.log(countries);
countries.shift();
console.log(countries);
countries.unshift("Bangladesh");
console.log(countries);
*/

/*var numbers = [];
console.log(numbers);
numbers.push(12);
console.log(numbers);
numbers.push("two");
console.log(numbers);
var x = "Hello world";
var y = x.split("");
console.log(y);
x = "Bangladesh is a country";
y = x.split("n");
console.log(y);
y = x.split(" ");
console.log(y);

x = "Bangladesh, china, Finland";
y = x.split(",");
console.log(y);
var z = y.toString();
console.log(z);

x = "Bangladesh is a country";
y = x.split(" ");
console.log(y);
z = y.toString();
console.log(z);
z = y.join(" ");
console.log(z);
z = numbers.concat(y);
console.log(z);
console.log(z.sort());
console.log(z.reverse());
*/

//object
/*
var arr = [1, 2, 3]
console.log(arr);

var student = { name: "Maimuna", age: 25, hometown: "Dhaka" };
console.log(student);
console.log(student["age"]);
console.log(student.hometown);
student["occupassion"] = "Student";
console.log(student);
student.village = "Kurigram";
console.log(student);
delete student.village;
console.log(student);
student = {};
console.log(student);
student.name = "Maimuna";
student.dep = "CSE";
student.sub = "JS";
console.log(student);
*/

//Array & object
/*
var arr = [10, 12, 8, 9];
arr = [10, 12, ["a", "b", "c"], 8, 9];
console.log(arr);
console.log(arr[2][1]);
console.log(arr[2][1]);
arr = [10, 12, ["a", ["wrd1", "wrd2"], "c"], 8, 9];
console.log(arr);
console.log(arr[2][1][1]);
arr = [10, 12, ["a", "b", "c"], { pro1: "item1", pro2: "item2" }];
console.log(arr);
console.log(arr[3]);
console.log(arr[3].pro1);
arr = [10, 12, { pro1: "item1", pro2: [1, 2, ["a", "b"]] }];
console.log(arr);
console.log(arr[2]["pro2"][2][1]);
console.log(arr[2].pro2[2][1]);
var obj = { pro1: "item1", pro2: "item2", pro3: ["item3", "item4"] };
console.log(obj);
console.log(obj.pro3[1]);
*/

//null == undefined//true
//null === undefined//false;data type
//var b = "";//empty value
//null == "";//false
//undefines == "";//false
//var c = "abc"/10;//NaN
//NaN == null;//false
//NaN == undefined;//false
//NaN == "";//false

/*
//primitive type - number,string,boolean; deals with value
let a = 7;
let b = a;

a = 45;
console.log(b);
//Reference type - array, object; deals with address
let num = [1, 2, 3];
let newNum = num;
console.log(newNum);
num[1] = 500;
console.log(num);
console.log(newNum);
let j = {};
console.log(j.name);
*/

//Tempplate literals
/*
console.log(`Firt line
seond line`);
let age = 20;
console.log(`His age is ${age}`);
let name = "Maimuna";
let age1 = 22;
let dob = "21th Nov, 1998";
console.log(`His name is ${name}
His age is ${age1}
Date of Birth ${dob}`);

let a = 34;
let b = 67;
console.log(`${a} + ${b} = ${a + b}`);
*/

//control flow
/*
if (false) {
    console.log("If statement executed");
} else {
    console.log("Else statement is executed");
}

console.log("End of if statement");

var age = prompt("Enter your age: ");
if (age >= 50) {
    console.log("old!");
} else if (age >= 30 && age < 50) {
    console.log("Under 50 but above or equal 30!");
} else if (age < 30 && age >= 18) {
    console.log("Under 30 but above or equal 18");
} else if (age < 18 && age > 0) {
    console.log("Under 18");
} else {
    console.log("Invalid input");
}
*/

//Find the largest number
/*
var n1 = prompt("First number: ");
var n2 = prompt("Second number: ");
var n3 = prompt("Third number: ");

n1 = parseInt(n1);
n2 = parseInt(n2);
n3 = parseInt(n3);*/
/*
if (n1 >= n2 && n1 >= n3) {
    console.log(n1 + " is the largest number");
} else if (n2 >= n1 && n2 >= n3) {
    console.log(n2 + " is the largest number");
} else {
    console.log(n3 + " 22is the ;argest number");
}*/
/*
if (n1 >= n2) {
    if (n1 >= n3) {
        console.log(n1 + " is the largest!");
    } else {
        console.log(n3 + " is the largest!");
    }
} else {
    if (n2 >= n3) {
        console.log(n2 + " is the largest!");
    } else {
        console.log(n3 + " is the largest!");
    }
}*/

//switch

var option = prompt("Enter your option: ");
var text;

switch (option) {
    case "a":
        text = "Option 1 selected";
        break;
    case "b":
        text = "Option 2 selected";
        break;
    case "c":
        text = "Option 3 selected";
        break;
    default:
        text = "no Option  selected";
        break;
}

console.log(text);
