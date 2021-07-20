const fs = require('fs')
const path = require('path')
const cheerio = require('cheerio')
var my_value = 0

// function check_membership(list,current_entry){
//     for(const [key, value] of Object.entries(list)){
//         if(value == "[object Object]"){
//             console.log(list[key])
//             check_membership(list[key], current_entry)
//         }else if(value == current_entry){
//             my_value = 1
//         }
//     }
//     return 0
// }

// var my_test = {
//     a: 'dog',
//     c: 'cat',
//     d: 3,
//     child:{
//         a: 'street',
//         t: 'flower',
//         child:{
//             s: 'magenta',
//             h: 'tango'
//         },
//         s: 'data',
//         m: 'flood'

//     }
// }

let html = fs.readFileSync(path.join(__dirname,'confluence_export','DevOps','index.html'),'utf-8')
let $ = cheerio.load(html)

$('*').each(function(){
    if(this.name == 'ul'){
        html = $(this).html()
        return false
    }
})
$ = cheerio.load(html)
$('*').each(function(){
    console.log(this.attribs)
})