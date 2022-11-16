const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
require('colors')

const url = 'https://www.worldometers.info/coronavirus';
// const url = 'https://www.espncricinfo.com/series/icc-men-s-t20-world-cup-2022-23-1298134/england-vs-pakistan-final-1298179/full-scorecard'
request(url, async (error, res, html) => {
    if (error) {
        console.log('Error: ', error);
        return;
    }

    await fs.promises.writeFile(`${__dirname}/response.html`, html)
    handlehtml(html);
});

function handlehtml(html) {
    const selTool = cheerio.load(html);
    const contentArr = selTool(".maincounter-number span");
    console.log(selTool(contentArr[0]).text());
    console.log(selTool(contentArr[1]).text());
    console.log(selTool(contentArr[2]).text());



}