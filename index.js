const axios = require('axios')
const { exec } = require('child_process')

var config = {
    method: 'get',
    url: 'https://santiago-test.atlassian.net/wiki/rest/api/contentbody/convert/markdown',
    headers: { 
        'Accept': 'application/json', 
        'Authorization': 'Basic c21vbnNhbHZlbWVqMjAxOUBmYXUuZWR1OkJNZnJHSm5UNTFMRXRGVVdxWFpaOTRCNg=='
    }
};

function downloadContent(myurl){
    let url =`https://santiago-test.atlassian.net/wiki${myurl}`
    console.log(url)
        

    }

axios(config)
.then(function (res) {
//console.log(res.data.results[0]._links.download);
//console.log(JSON.parse(JSON.stringify(response.data)));
//downloadContent(res.data.results[0]._links.download)
})
.catch(function (err) {
console.log(err);
});