function message(){
    console.log("this is message")

}

message();

let globalVariable = "global";

function messageWithGlobalVariable(){
    console.log("message " + globalVariable);
}
messageWithGlobalVariable();

function functionWithOwnVariables(){
    let b = 2;
    let a = 3;
    console.log(a+b);
}
functionWithOwnVariables();

function inside()
{   console.log("inside");
    message();
}

inside();

function addAndDisplay(a, b, c){
    console.log(a+b+c);
}

addAndDisplay(2,5,8);
addAndDisplay(2,3,8);

let a = 3;
let b = 22;
let c = 12;
let myVariable = 33;

addAndDisplay(a, b, c);
addAndDisplay(a, a, a);
addAndDisplay(myVariable, c, a);
addAndDisplay(3,5);
let s;

function displayParameter(a){
    console.log(a);
}
displayParameter();

const myFaction = function(){
    console.log("function assigned to variable ");
}
myFaction();

const size = 44;

let sum = 0;
function addAndReturn(a,b,c){
    sum = a + b + c;
    console.log(sum);
   // return sum;
}

addAndReturn(3,6,8)
//dupa++;
//console.log(dupa);

sum++;
console.log(sum);



function changeSalary(value, workers){
    for(let worker of workers){
        worker.salary += value;
    }
}

let workers = [
    {name: "Jan Kowalski", position: "manager", salary: 12000},
    {name: "Anna Nowak", position: "manager", salary: 12000},
    {name: "Andrzej Socha", position: "IT specialist", salary: 8000},
    {name: "Tomasz Bąk", position: "marketer", salary: 8500 },
    {name: "Andrzej Kralicki", position: "marketer", salary: 7000}
]

let workers2 = [
    {name: "Jan Kowalski", position: "manager", salary: 12000},
    {name: "Anna Nowak", position: "manager", salary: 12000},
    {name: "Andrzej Socha", position: "IT specialist", salary: 8000},
    {name: "Tomasz Bąk", position: "marketer", salary: 8500 },
    {name: "Andrzej Kralicki", position: "marketer", salary: 7000}
]

changeSalary(55,workers);
console.log(workers);
console.log(workers2);

function salaryAvg(workers){
    let sum = 0;
    for(let worker of workers){
        sum+= worker.salary;
    }
    return sum/workers.length;
}

let salary1 = salaryAvg(workers);
let salary2 = salaryAvg(workers2);
console.log((salary1+salary2)/2);