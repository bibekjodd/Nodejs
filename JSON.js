


const bioData = {
    name: "Bibek Bhattarai",
    age: 20,
    country: "Nepal"
};

const jsonData = JSON.stringify(bioData);
const fs = require('fs');
// fs.writeFile("input.txt",jsonData,()=>{});
let getFileData;
fs.readFile('input.txt', "utf-8", (err, getFileData) => {
    console.log(getFileData)


});
// fs.unlink('input.txt',()=>{})
// console.log(getFileData+"hello")