// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

// WAY - 1

let time = 1;

function logTime() {
  console.log("TIME:", time);
  if (time > 0) { // never fail 
      setTimeout(logTime, 1000);
      time++;
  }
}

logTime();

// WAY - 2


let time = 0;

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function startTimer() {
    while(true){
        await delay(1000);
        time++;
        console.log("TIME:", time);
    }
}

startTimer();
