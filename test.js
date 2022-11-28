console.log("welcome");
const d = new Date();
console.log(d.getFullYear());
console.log(d.getMonth()+1);
console.log(d.getDate());
console.log(d.getDay());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.getMilliseconds());
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let month = months[d.getMonth()];
console.log(month);
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[d.getDay()];
console.log(day);
console.log(d.getTime());
console.log(d.getTimezoneOffset());
console.log(d.setFullYear(2021));
console.log(d.setMonth(02));
console.log(d.setDate(12));
console.log(d.setTime());
console.log(d.setHours(10));
console.log(d.setMinutes(30));
console.log(d.setSeconds(28));
console.log(d.setMilliseconds(23445));
console.log(Math.sign(30));
console.log(Math.floor(Math.random()*10));
console.log(Math.floor(Math.random()*10));
// console.log(Math.floor(Math.random()*10));
// console.log(Math.floor(Math.random()*10));
// console.log(Math.floor(Math.random()*10));
console.log(Math.floor(Math.random()*10));
const getRandInte = (max,min)=>{
    return Math.floor(Math.random()*(max-min)+min);
};
console.log(getRandInte(10,2));
console.log(getRandInte(5,1));
// const wo = Boolean(10>6);
// console.log(wo);
// const wo1 = Boolean(10<6);
// console.log(wo1);
// const logic = Boolean(10==10);
// console.log(logic);
// const logic1 = Boolean(10==="10");
// console.log(logic1);
// const logic2 = Boolean(10||10);
// console.log(logic2);
// let p = Boolean("");
// console.log(p);
// let p1 = Boolean("flase");
// console.log(p1);
// console.log(Boolean(10/"hellow"));
// console.log(Boolean(0));
// console.log(Boolean(-0));
// console.log(Boolean(null));
// console.log(Boolean(1));
let x = 3;
let y = 5;
let condition = (x===y);
console.log(condition);
console.log(!(x>y));

console.log(x<y && y>1);
console.log(x>=3||y>1);
console.log(x<4||y<4);
console.log(x>=1&&y==5);
console.log(x>2&&y==4);
console.log(!(x===y));
console.log(!(x<=5));
function tarinary(){
  let age =  document.getElementById("age").value;
  let votable = (age<18)? "Too Young":"Too enough";
 document.getElementById("demo").innerHTML = `${votable} to vote`;

}
// function cop(){
//     let votable;
//     var age1 = Number(document.getElementById("age1").value);
//     if(isNaN(age1)){
//      votable = "this input is not a number"
//     }
//     else{
//      votable = (age1>18)?"too old enough":"too young ";
//     }

// }
// document.getElementById("demo").innerHTML = `${votable} to voat;`;

let day1;
switch(new Date().getDay()){
    case 0:
        day = "sunday";
        break;
    case 1 : 
        day = "Monday";
        break;
     case 2 :
        day = "Tuesday";
        break;
     case 3 :
        day = "Wednesday";
        break;
     case 4 :
        day = "Thursday";
        break;
     case 5 :
        day = "Friday";
        break;
     case 6 :
        day = "Saturday";
     break;
     default : 
     "there is no match here ."
}
console.log (`today  is  ${day}`);
let  txt;
switch(new Date().getDay()){
    case 5:
        txt = "today is thursday";
        break;
    case 1 :
        txt = "today is monday";
        break;
    default: 
    txt = "looking forword the next weekend";
   
}
console.log(txt);









let day2;
switch(new Date().getDay()){
    case 0:
     case 6 :
        day2 = "this is weekned ";
     break;
     case 4:
    case 5:
        day2 = "this is near the weekend";
     default : 
     "there is no match here .";
}
console.log (`${day2}`);

const car = ["volvo", "fiat","bmw","volve1","other"];
let text = "";
for(let i = 0; i<car.length; i++){
    text += car[i] +"" +",";
}
console.log(text);
for(let i= 0; i<8; i++){
    text += "The number is " + i + ","+ "";
}
console.log(text);
const person = {
    name:"tamanna",
    address:"cumilla",
    tel:02235,
}
let tx = "";
for(let x in person){
    tx += `${person[x]} `;

}
console.log(tx);
const p = [1,3,4,4,5,56,67,43,65];
let n = "";
for(let i in p){
    n += `${p[i]} `;
}
console.log(n);
p.forEach((value,index,arry)=>{
    n += value*2 + ",";
})
console.log(n);


// for of loop practice
const car1 = ["volvo", "fiat","bmw","volve1","other"];
let gess = "";
for(let x of car1){
    gess += x+","+"";
}
console.log(gess);
let lan = "bangladeshi people called bagla language";
let al = "";
for(let x of lan){
    al += x;
}
console.log(al);

// **************** loop******************
//while loop**********
// let i=0;
// let test = "";
// while(i<12){
// test += `${i} ,`;
// i++;
// }
// console.log(test);
//do while loop****************************
// let i=0;
// let test1 = "";
// do{
// test1 += ` the number is here ${i}  `;
// i ++;
// }while(i<12);
// console.log(test1);


//for loop****************
let test3 = "";
for(let i = 0; i<10; i++){
test3 += `${i}`;
}
console.log(test3);
