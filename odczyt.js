const { log } = require('console');
const fs = require('fs');

fs.readFile("example.txt", 'utf-8', (err, data)=>{
    if(err)
        console.log('blad podczas odczytu pliku: ', err);
    else
        console.log(data);
})