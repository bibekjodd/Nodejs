const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
require('colors')

// request('https://insta-clone-x.vercel.app/', async (error, res, html) => {
// const url = 'https://www.worldometers.info/coronavirus';
// const url = 'https://www.cricbuzz.com/live-cricket-scores/43206/pak-vs-eng-final-icc-mens-t20-world-cup-2022';
const url = "https://www.espncricinfo.com/series/icc-men-s-t20-world-cup-2022-23-1298134/england-vs-pakistan-final-1298179/full-scorecard"
request(url, async (error, res, html) => {
    if (error) {
        console.log('Error: ', error);
        return;
    }

    await fs.promises.writeFile('response.html', html)
    handlehtml(html);
});

function handlehtml(html) {
    const selTool = cheerio.load(html);
    // const contentArr = selTool(".maincounter-number span");
    const contentArr = selTool("ds-inline-flex.ds-items-start.ds-leading-none span")
    console.log(selTool(contentArr[0]).text());
}