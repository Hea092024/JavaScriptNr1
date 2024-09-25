// Functions

// Function keyword. Arrow function.

function myFunction() {
  console.log("Function has ran");
}

//myFunction();

const myArrowFunction = () => {
  console.log("hello from the arrow function!");
  return " Ingen mer underfined!";
};

//myArrowFunction();

// Return statement.

let lives = 2
function myReturnFunction(){
    const myText = "Dette er min tekst.";
    if (lives === 3){
        return;
    } else {
       return "hei"
    }
    console.log("hello!!");
}

myReturnFunction();
// Scope

//console.log(myText);

// const myVariable = myArrowFunction();
//console.log(myVariable);

// console.log(myReturnFunction());

// Parameters  / Arguments / Args

const userName = "Killer981"
const userKills = 87

const greeter = (name) => {
    return `Velkommen ${name}, du har ${userKills} kills, bra jobbet!`
}

const greeting = greeter(userName)

console.log(greeting)

const multiplier = (num1, num2) => {
    return num1 * num2
};

console.log (multiplier(2, 3))