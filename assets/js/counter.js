/* Declaration of Variables */
//array for counter starts at 1 and ends with 0
const COUNTER = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

//target the ids of the divs that are used for the counter
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let num3 = document.getElementById("num3");


/* functions for counter */

//sleep function to to simulate a delay for the counter
const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

//this function is reponsible for the loop that occurs in the rightmost div
//this iterates through the array called COUNTER and inserts the correspoding
//number in the HTML of its corresponding id which is num1
const firstCounter = async () => {
    for(let i = 0; i <= 10; i++) {
        await sleep(1000)
            if (i < 10){
                num1.innerHTML = `${COUNTER[i]}`;
                //console.log(COUNTER[i]);
                //console.log(i);
            }
    }
    
}

//this function is reponsible for the loop that occurs in the second rightmost div
//this iterates through the array called COUNTER and inserts the correspoding
//number in the HTML of its corresponding id which is num2
const secondCounter = async () => {
    for(let i = 0; i <= 10; i++) {
        await sleep(10100)
            if (i < 10){
                num2.innerHTML = `${COUNTER[i]}`;
                //console.log(COUNTER[i]);
                //console.log(i);
            }
            firstCounter(); 
    }
    
}

//this function is reponsible for the loop that occurs in the third rightmost div
//this iterates through the array called COUNTER and inserts the correspoding
//number in the HTML of its corresponding id which is num3
const thirdCounter = async () => {
    for(let i = 0; i <= 10; i++) {
        await sleep(100100)
            if (i < 10){
                num3.innerHTML = `${COUNTER[i]}`;
                //console.log(COUNTER[i]);
                //console.log(i);
            }
            firstCounter();
            secondCounter();
    } 
}

//call the functions
firstCounter();
secondCounter();
thirdCounter();