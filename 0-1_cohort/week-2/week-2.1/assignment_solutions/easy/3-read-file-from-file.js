// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 


const fs = require('fs')

fs.readFile('text-file.txt','utf-8', (error,data) => { // async opertaion
    if (error)  
        throw error
    console.log("data:",data)
})


for(let i = 0; i < 1000; i++){ // expensive operation
    console.log(i);
}

// even though you execute the `fs.readFile` before the expensive(take more time to be executed) for loop, the data will logged after the execution of for loop. This is because the callback function of the `fs.readFile` waiting on the callback queue, once all the sync operation(for loop) executed the callbacks(`console.log("data:",data)`) will be executed