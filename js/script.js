"use script";
// console.log(1);
// alert('Hello');
// const result = confirm("Are you here?");
// console.log (result);



// вложенные условия пример
const num = 60;
if(num<49){
    console.log("Error");
} else if (num>100) {
    console.log ('Too much');
} else {
    console.log ('OK')
};


// условия: тернарный оператор
const num = 47;
(num===50) ? console.log("True") : console.log("Not true");


// условия: switch комбинация пример
const a = 145;
switch (a){
    case 45:
        console.log("ERROR");
        break;
    case 55:
        console.log("OK");
        break;
    default:
        console.log("not found");
        break;  
}


// циклы с предусловием и постусловием
let num = 47;
while (45 < num ) {
    console.log('next number is ' , --num);
}

let fff = 77;
do {
    console.log(fff);
    --fff;
}
while (fff>74);


let x = 7;
for (let i = 1; i<8; i++){
    console.log('x = ' , x+x--);
}


// прерывание цикла
//break 
for (let i=1; i<4; i++) {
    if (i===3) {
        break;
    }
    console.log('i=' , i);
}
// continue
for (let y=1; y<6; y++) {
    if (y===3) {
        continue;
    }
    console.log('y=' , y);
}
