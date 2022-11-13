// same as Javascript libraries.
// Node.js has a set of built-in modules which can be used without installation.

// fs -> file system 

const fs = require('fs');
// creating a new file 
// fs.writeFileSync("input.txt", "This is the first text written in the file");

// append in a file 
// fs.appendFileSync("input.txt", "\nthis is appended text");


// reading file
// const str= fs.readFileSync('output.txt').toString();
// console.log(str);


// rename file 
// fs.renameSync("input.txt","output.txt");

// make a folder and CRUD 
// fs.mkdirSync("Hello");
// fs.writeFileSync('Hello/bio.txt',"Name: Donald Trump");
// fs.appendFileSync('Hello/bio.txt',"\nAge: 70");
// fs.appendFileSync('Hello/bio.txt',"\nCountry: USA");
// const str = fs.readFileSync('Hello/bio.txt','utf-8');
// console.log(str); 
// fs.renameSync('Hello/bio.txt','Hello/myBio.txt');

// delete file 
// fs.unlinkSync('Hello/myBio.txt');

// delete folder 
// fs.rmdirSync("Hello");
// fs.appendFileSync("FsAsyncCoreModule.js", "//Asynchronous fs in NODEJS");

console.log(fs.readdirSync('.'))
