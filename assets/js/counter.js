const COUNTER = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let num1 = document.getElementById("num1");

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

const userCounter = async () => {
    for(let i = 0; i <= 10; i++) {
        await sleep(1000)
            if (i != 10){
                num1.innerHTML = `${COUNTER[i]}`;
                console.log(COUNTER[i]);
                //console.log(i);
            }
    }  
}

userCounter();