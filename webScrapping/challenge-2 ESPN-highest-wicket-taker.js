const request = require('request');
const cheerio = require('cheerio');
const url = '';

request(url, cb);


function cb(err, res, html) {
    if (err) {
        console.log(err)
        return;
    }
    extractHTMl(html);
}

function extractHTMl(html) {
    const $ = cheerio.load(html);

}