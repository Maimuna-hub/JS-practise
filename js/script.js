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


