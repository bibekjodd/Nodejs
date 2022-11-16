const request = require('request');
const fs = require('fs');
const cheerio = require('cheerio');
const url = 'https://www.espncricinfo.com/series/icc-men-s-t20-world-cup-2022-23-1298134/england-vs-pakistan-final-1298179/ball-by-ball-commentary';

console.log("Sending request on the server...");
request(url, cb);
async function cb(err, res, html) {
    if (err) {
        console.log(err)
        return
    }
    await fs.promises.writeFile(`${__dirname}/response.html`, html);
    extractHTML(html);
}

function extractHTML(html) {
    const $ = cheerio.load(html);
    const elemsArr = $(".ds-relative .ds-text-tight-m .ci-html-content")
    const text = $(elemsArr[0]).text();
    const htmlData = $(elemsArr[0]).html();
    console.log(htmlData)
    // for (let i = 0; i < elemsArr.length; i++)
    // console.log($(elemsArr[i]).text())
}