
// Number
let num:number=10;
console.log(num);
// String
let fName:string="Jhon";
console.log(fName);
let lName:string='Wick';
console.log(lName);
let fullName:string=`Hello ${fName} ${lName}`;
console.log(fullName);

// Boolean
let isActive:boolean=true;
console.log("Cast to Vote:",isActive);

//Null & Undefined
let unassigned:null=null;
console.log(unassigned);
let unAssociate:undefined=undefined;
console.log(unAssociate);

//Any
let wareHouse:any=10;
console.log(typeof (wareHouse));
console.log(wareHouse)
wareHouse="Phone";
console.log(wareHouse)
wareHouse=null;
console.log(wareHouse)
wareHouse=true;
console.log(wareHouse)

// Union
let combaination:string | number | boolean
combaination="Union";
// combaination=10;
// combaination=true;
console.log(combaination);

//Void
function sum(a:number, b:number):number{
 return(a+b);
}
 let addtion:number =sum(10,20);
 console.log(addtion);
// ++++++++++++++++++++++++++++++++++++++
 function sports(sportsName: string, sportsType:string):string{
return (`${sportsName} ${sportsType}`);

 }
 let nameofSports:string=sports("Badminton","Racket");

 console.log(nameofSports);