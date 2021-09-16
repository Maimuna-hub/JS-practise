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
/*
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
*/
//task - 02
/*
var num = prompt("Enter your number: ");

if (num >= 80 && num <= 100) {
    console.log("Your grade: A+");
} else if (num >= 70 && num < 80) {
    console.log("Your grade: A");
} else if (num >= 60 && num < 70) {
    console.log("Your grade: A-");
} else if (num >= 50 && num < 60) {
    console.log("Your grade: B");
} else if (num >= 40 && num < 50) {
    console.log("Your grade: C");
} else if (num >= 33 && num < 40) {
    console.log("Your grade: D");
} else if (num >= 0 && num < 33) {
    console.log("Your grade: F");
} else {
    console.log("Your grade: Invalid input");
}*/

//task - 03
/*
console.log("Select an Option: \n1. Add \n2. Subtractn \n3. Mulitply \n4. Divide");

var num1 = prompt("Enter First Number: ");
var num2 = prompt("Enter Second Number: ");
var option = prompt("Choose an operation: ");
var result = null;

num1 = parseInt(num1);
num2 = parseInt(num2);
option = parseInt(option);

var num1Con = isNaN(num1);
var num2Con = isNaN(num2);
var optionCon = isNaN(option);

if (num1Con || num2Con || optionCon) {
    console.log("Invalid Input!");
} else {
    switch (option) {
        case 1:
            result = num1 + num2;
            break;
        case 2:
            result = num1 - num2;
            break;
        case 3:
            result = num1 * num2;
            break;
        case 4:
            result = num1 / num2;
            break;
        default:
            break;
    }

    if (result == null) {
        console.log("No Result!");
    }
    else {
        console.log("Result: " + result);
    }
}
*/

// While Loop
/*
var i = 1;

while (i <= 5) {
    console.log("value of i: " + i);
    i++;
}
console.log("value of i: " + i);
*/

// Do While Loop
/*
var i = 1;

do {
    console.log("value of i: " + i);
    i++;
} while (i <= 5);

console.log("value of i: " + i);
*/

//print 1 to 10
/*
var i = 1;

while (i <= 10) {
    console.log(i);
    i++;
}

//sum of 1 to 10

var j = 1;
var sum = 0;
var product = 1;

while (j <= 10) {
    sum = sum + j;
    product = product * j;
    j++;
}

console.log("Result: " + sum);
console.log("Result: " + product);
*/

//For Loop
/*
for (var i = 5; i >= 1; i--) {
    console.log(i);
}
*/

//break
/*
for (var i = 1; i <= 5; i++) {
    console.log(i);
    if (i == 3) {
        break;
    }
}*/

//continue; skip
/*
for (var i = 1; i <= 10; i++) {
    if (i % 2 == 1) {
        continue;
    }
    console.log(i);
}*/

// String
/*
let nam = "I am learning javascript";
let food = ["cake", "chocolate", "Ice cream"];
let len = food.length;

for (var i = 0; i < len; i++) {
    console.log(`Index : ${i}`);
    console.log(food[i]);
}
*/

//For-in => string/array/object
//For-of string/array

/*let nam = "I am learning javascript";
let food = ["cake", "chocolate", "Ice cream"];

let person = {
    nam: "Shakib Al Hasan",
    profession: "Cricketer",
    team: "Bangladesh",
    age: 33
}8?

/*
for (var x in nam) { //return index
    console.log(`index ${x} and item ${nam[x]}`);
}*/

/*
for (var x of nam) { //return values
    console.log(x)
}*/
/*
for (var x in food) { //return index
    console.log(`index ${x} and item ${food[x]}`);
}

for (var x of food) { //return values
    console.log(x)
}*/

//for object return property
/*
for (var x in person) { //return index
    console.log(`property ${x} :
      ${person[x]}`);
}*/

//task - 04
/*
var n = parseInt(prompt("Enter the number of terms: "));
var sum = 0;
var series = "";

for (var i = 1; i <= n; i++) {
    sum += i ** 2;
    series += (i ** 2).toString();
    if (i == n) { continue; }
    series += " + ";
}

console.log(`${series} = ${sum}`);
*/

//Function
/*
saySomething();

function saySomething() {
    console.log("Hello!");
    console.log("I am learning js");
    console.log("Maimuna");
}

saySomething();
*/

//function parameter/argument
/*
function saySomething(param1 = "Maimuna", param2 = "akhtar") {
    console.log(`Hello! ${param1}, ${param2}`);

}

saySomething();
saySomething("Muna", "shorna");
*/
/*
function addNum(a, b) {
    console.log("The sum is: ");
    return a + b;
    console.log("End function");
}

console.log(addNum(4, 5));
let sum = addNum(2, 2);
console.log(sum);
*/

/*
function saySomething() {
    console.log("Hello world!");
}
saySomething();

//Function expression

let saySomething1 = function () {
    console.log("Hello world again")
}
saySomething1();

//Arrow function (ES6)

let saySomething2 = (para1, para2) => {
    console.log(`I am an arrow function in ${para1} (${para2})`);
}
saySomething2("js", "ES6");

let saySomething3 = para1 => {
    console.log(`I am an arrow function in ${para1}`);
}
saySomething3("js");
*/

//Array iteration using forEach

/*
var foods = ["cake", "Ice cream", "Chocolate", "Bread"];
var numbers = [1, 32, 31, 2];
*/


//1st parameter: Item
//2nd parameter: Index
//£rd parameter: whole Array

/*
let printEverything = function (item, i, arr) {
    console.log(`Index : ${i} and item ${item}`);
    console.log(arr);
}

foods.forEach(printEverything);
*/


//maping

//1st parameter: Item
//2nd parameter: Index
//£rd parameter: whole Array
/*
function addSomething(item, i) {
    return `Index : ${i} and ${item} is a food`;
}

let arr_res = foods.map(addSomething);
console.log(arr_res);

let arr_sqr = numbers.map(function (item) {
    return item * item;
})
console.log(arr_sqr);
*/

//Object Method
/*
let person = {
    firstName: "Maimuna",
    lastName: "Akhtar",
    dob: "21-11-1998",

    fullname: function () { //Method
        return `${this.firstName} ${this.lastName}`;
    }
}

console.log(person.firstName);
console.log(person.fullname());

let str = "Maimuna";
console.log(str.length);
console.log(str.split());
*/

//Math object
/*
let val;
val = Math.PI;
val = Math.E;
val = Math.round(3.28);
val = Math.ceil(1.1);
val = Math.floor(1.9);
val = Math.sqrt(81);
val - Math.abs(-9);
val = Math.pow(2, 3);
val = Math.min(1, 8, -9, 2, 5, 6);
val = Math.max(1, 8, -9, 2, 5, 6);
val = Math.random();
val = Math.floor(Math.random() * 100 + 1);

console.log(val);
*/

//Date object
/*
let val;
let today = new Date();
let birthday = new Date('11-21-1998 11:25:27');
birthday = new Date('August 26 1998');
birthday = new Date('11/11/1998');
val = today;
val = today.toString();
val = birthday;
val = today.getMonth() + 1;
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMilliseconds();
val = today.getTime();//timestamp => amount of second past since Jan last 1970
birthday.setMonth(11);
birthday.setDate(17);
birthday.setHours(18);
//console.log(birthday);
//console.log(val);
*/

//var , let and const
//let and const (ES6)
/*
var a = 10;
a = a + 7;

var a;// again declare

let b = 6;

b = b + 7;

//let b; can't again declare;

const c = 8;
//c = 9;
*/

//Global scope
/*
var a = 1;
let b = 2;
const c = 3;


console.log(`Global scope: `, a, b, c);

function test() {
    var a = 4;
    let b = 5;
    const c = 6;
    var e = 9;
    console.log(`Functions Scope: `, a, b, c);
}

test();

if (true) {
    var a = 7;// for if ,var is global
    let b = 8;
    const c = 9;
    console.log(`If scope: `, a, b, c);
}

console.log(`Global Scope: `, a, b, c);

for (for a = 0; a < 10; a++) {
    console.log(`Loop: `, a);// for 'for' ,var is global
}
console.log(`Global Scope: `, a, b, c);
*/

//Class
//class is a template for creating object
/* useless
let person1 = {
    firstName: "Maimuna",
    lastName: "Akhtar",

    fullName: function () {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

let person2 = {
    firstName: "Sumaia",
    lastName: "Islam",

    fullName: function () {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

console.log(person1);
console.log(person2);
*/

/*
class Person {
    constructor(fName, lName, birthDay) {
        this.firstName = fName;
        this.lastname = lName;
        this.dob = birthDay;
    }

    calculateAge() {
        let birthday = new Date(this.dob);
        let diff = Date.now() - birthday.getTime();
        let ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    fullName() {
        console.log(this.firstName, this.lastname);
    }
}

let person1 = new Person("Maimuna", "Akhtar", "11-21-1998");
let person2 = new Person("Sumaia", "Islam", "09-06-1998");
let person3 = new Person("Shaikhul", "Islam", "01-20-1995");

console.log(`Maimuna's age is: `, person1.calculateAge());
console.log(`Sumaia's age is: `, person2.calculateAge());
console.log(`Shakhul's age is: `, person3.calculateAge());

console.log(person1.fullName());
console.log(person2.fullName());
console.log(person3.fullName());
*/

//sub class
//Inheritance

/*
class Person { //Base class
    constructor(fName, lName) {
        this.firstName = fName;
        this.lastName = lName;
    }

    greeting() {
        return `Hello ${this.firstName} ${this.lastName}!`;
    }
}

class Customer extends Person { //sub class
    constructor(fName, lName, phone, memberShip) {
        super(fName, lName);

        this.phone = phone;
        this.memberShip = memberShip;
    }

    fullName() {
        console.log(this.firstName, this.lastName);
    }
}


let person1 = new Person("Maimuna", "Akhtar");
console.log(person1);
console.log(person1.greeting());

let customer1 = new Customer("Shaikhul", "Islam", "019xxxxx", "1234");

console.log(customer1);
console.log(customer1.greeting());
console.log(customer1.fullName());
*/

//Static function
/*
class Person { //Base class
    constructor(fName, lName) {
        this.firstName = fName;
        this.lastName = lName;
    }

    greeting() {
        console.log(`Hello ${this.firstName} ${this.lastName}!`);
    }

    static test() { //call from class, not from object
        console.log("I am static function!");
    }
}

let person1 = new Person("Maimuna", "Akhtar");

console.log(person1.greeting());
console.log(Person.test());
*/

//Error handling
/*
console.log("Before error");

try {
    //test();
    // undefined.test();
} catch (err) {
    //console.log(err);
    console.log(err.message);
    console.log(err.name);
} finally { //print code if error occur
    console.log("I am inside finally!");
}

console.log("After error");
*/

/*
let a = 19;

try { //write code for eroor generate
    if (a > 15) throw "Too big";
    else if (a < 5) throw "Too small";
} catch (err) { //catch error type and print error
    console.log(err);
}
*/

//JSON - Javascript object Notation
//data format for exchanging data between system running on different technology
/*
var student = {
    name: "Maimuna",
    age: 22,
    hometown: "Khulna"
};

var student_json = JSON.stringify(student);
console.log(student_json);

var student_new = JSON.parse(student_json);
console.log(student_new);
*/


/*var student_json = {
    "name": "Maimuna",
    "age": 22,
    "hometown": "Khulna"
}*/


//json data types
// String
// number
// Object
// Array
//boolean
// null

//doesn't support undefined, date, function
/*
var person = {
    name: "Maimuna",
    age: 22,
    hometown: "Khulna",
    married: true,
    dob: "11 - 21 - 1998",
    test_null: null,
    test_undefined: undefined,
    greet: function () {
        console.log(`Hello ${this.name}`);
    }
}

var person_json = JSON.stringify(person);
console.log(person_json);
*/

// JSON.stringify() --> JS object to JSON String
// JSON.parse() -->  JSON String to JS Object
/*
var person1 = {
    "name": "Rahim",
    "age": 25,
    "hometown": "Dhaka",
    "married": false
};

console.log(person1.name);
var person1_json = JSON.stringify(person1);
console.log(person1.age);
var person1_obj = JSON.parse(person1_json);
console.log(person1_obj);

var person2 = {
    name: "Karim",
    age: 35,
    hometown: "Chittagong",
    married: true
};

console.log(person2);
console.log(person1);
*/

//json object and array
/*
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var data = this.responseText;
        //console.log(data);
        jsonData(data);
    }
};
xmlhttp.open("GET", "data.json", true);
xmlhttp.send();

function jsonData(json_obj) {
    //console.log(json_obj);
    var js_obj = JSON.parse(json_obj);
    //console.log(js_obj);

    for (x in js_obj.persons) {
        //console.log(x);
        var persons = js_obj.persons
        //console.log(persons[x]);
        for (y in persons[x]) {
            console.log(y, ":", persons[x][y]);
        }

    }
}
*/