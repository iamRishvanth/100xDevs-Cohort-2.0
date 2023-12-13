// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.


const fs = require("fs")

const data = "Hai from JS file"

fs.writeFile('text-file.txt',data,'utf-8',(error) => {
    if(error)
        throw error
    console.log("This was written on the file")
})