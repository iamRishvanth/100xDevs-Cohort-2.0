// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)



date = new Date()

setInterval(() => {
    time24hrs = date.toLocaleTimeString('en-IN',{ hour12: false })
    time12hrs = date.toLocaleTimeString('en-IN')
    console.log("TIME(24 HRS FORMAT):",time24hrs)
    console.log("TIME(12 HRS FORMAT):",time12hrs)
    date.setSeconds(date.getSeconds() + 1)
},1000)