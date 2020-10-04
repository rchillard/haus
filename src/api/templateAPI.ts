import * as fs from 'fs'
import * as path from 'path'
import * as os from 'os'

const templateDirectory = path.join(__dirname, '../templates/')
// Replace with parameter
const name = 'redirect.html'

fs.readdir(templateDirectory, (err, files) => {
    if (err) {
        throw err;
    }

    files.forEach(file => {
        console.log(file);
        if(file === 'redirect.html') {
            console.log('found it!')
        }
    });
});