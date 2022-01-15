const http = require('http');

const url = 'http://api.weatherstack.com/current?access_key=7b5c2f0ef1ff73acbac66d45a61f005d&query=45,-75&units=f';

const request = http.request(url, (response) => {
    let data = '';

    response.on('data', (chunk) => {
        data = data + chunk.toString();
    });

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    });
});

request.on('error', (error) => {
    console.log('Error:', error);
});

request.end();