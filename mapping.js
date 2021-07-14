const fs = require('fs')
const path = require('path')
const cheerio = require('cheerio')


html = fs.readFileSync(path.join(__dirname,'..','confluence_export','DevOps','index.html'),'utf-8')
var $ = cheerio.load(html)

$('a').each( function(i) { 
    
    console.log($(this).parentsUntil('li').text())
    console.log(`${$(this).text()}  ---   ${$(this).attr('href')}`)
    if(i == 0){
        return
    }
    });