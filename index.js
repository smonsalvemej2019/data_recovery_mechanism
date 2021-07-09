const axios = require('axios')

var config = {
    method: 'get',
    url: 'https://santiago-test.atlassian.net/wiki/rest/api/content/393218/child/attachment',
    headers: { 
        'Accept': 'application/json', 
        'Authorization': 'Basic c21vbnNhbHZlbWVqMjAxOUBmYXUuZWR1OkJNZnJHSm5UNTFMRXRGVVdxWFpaOTRCNg=='
    }
};

axios(config)
.then(function (response) {
console.log(JSON.stringify(response.data));
})
.catch(function (error) {
console.log(error);
});