const fs = require('fs')
const path = require('path')
const cheerio = require('cheerio')

function check_membership(list,current_entry){
    for(const [key, value] of Object.entries(list)){
        if(value == "[object Object]"){
            for(child in value){
                if(value[child] == current_entry){
                    return 1
                }
            }
        }else if(value == current_entry){
            return 1
        }
    }
    return 0
}

var my_test = {
    a: 'dog',
    c: 'cat',
    d: 3,
    child:{
        a: 'street',
        t: 'flower',

    }
}


console.log(check_membership(my_test,'closet'))

let html = fs.readFileSync(path.join(__dirname,'..','confluence_export','DevOps','index.html'),'utf-8')
let $ = cheerio.load(html)
var ul = 0
var li = 0

$('*').each(function () {
    if($(this).is('ul')){
        ul += 1

    }
})

console.log(ul)

// $('a').each( function(i) { 
    
//     if(i == 3){
//         return false
//     }

//     console.log(`${i} ${$(this).attr('href')}`)

//     let child = fs.readFileSync(path.join(__dirname,'..','confluence_export','DevOps',$(this).attr('href')),'utf-8')
//     let inner = cheerio.load(child)
//     inner('a').each(function(){
//         console.log(`       ${$(this).text()}`)
//     })
    
//     });