// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```



const fs = require('fs')

let fileContent = fs.readFileSync('text-file.txt','utf-8',(error) => {
    if(error)
        throw error
    console.log("FILE READED")
})

fileContent = fileContent.replace(/\s+/g," ").trim()

fs.writeFile('text-file.txt',fileContent,'utf-8',(error)=>{
    if(error)
        throw error
    console.log("SPACES REMOVED")
})