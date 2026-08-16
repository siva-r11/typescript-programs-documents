console.log("***********Arthematic Operators***************");
let a:number=10, b:number=20;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

console.log("***********Assigment Operators***************");
a=5, b=7;
console.log(a+=b);
console.log(a-=b);
console.log(a*=b);
console.log(a/=b);
console.log(a%=b);

console.log("***********Realtional Operator***************");
a=15, b=10;
console.log(a>b); //true
console.log(a<b); //false
console.log(a>=b); //true
console.log(a<=b); //false
console.log(a!=b); //true
console.log(a==b); //false
console.log(a===b); //true
console.log("***********Difference == === ***************");
let c:any=10, d:any="10";
console.log(c==d); //true check only value
console.log(c===d); //false check value along with data type

console.log("***********Logical Operator***************");
console.log(a>b && b<a); //true
console.log(a>b || a<b); //true
console.log(!b); //false

console.log("***********Incerement&Decrement Operator***************");

let x=10;
x++;
console.log(x);
let y=10
y--;
console.log(y);
let x1:number =15, y1:number=25;
let res1:number=x1++; //10
console.log("increment",res1);
let res2:number=++x1; //11
console.log("decrement",res2);

console.log("***********Ternary Operator***************");

//syntax condtion? printa:printb
let num1:number=10, num2:number=20;
let result:boolean= (num1<num2)? true:false;

console.log(result);

let personAge:number=30;
let vote:string= (personAge>18)? "Eligibile for Vote":"Not Eligibile for Vote";
console.log(vote);
