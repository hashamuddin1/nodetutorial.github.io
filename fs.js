const fs = require('fs');

fs.readFile("file.txt", "utf8", (err, data) => {
    console.log(err, data);
    console.log("finish");
})
console.log("finish"); //PHELE YE CHALAY GA PHIR FUNCTION CHALAY GAS

//NON BLOCKING IO: KISI KO TIME LAG RAHA HAY TW AGAY KA CODE CHALAY GA

//AESE BHI KRSAKTAY HAY
//issay file ka data phele print krega aur finish baad may
let a = fs.readFileSync("file.txt");
console.log(a.toString());
console.log("finish");

//write files
//writeFile bhi nonblocking io model par kam krta hay

fs.writeFile('file2.txt', "this is a data", () => {
    console.log('written to the data');
});

console.log("end");

//writefilesync
//ye non blocking support nhi krta
c = fs.writeFileSync("file2.txt", "hasham is a student");
console.log(c);
console.log("end hogia");