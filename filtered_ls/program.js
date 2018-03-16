const fs = require('fs');
const path = require('path');

fs.readdir(process.argv[2], (err, files) => {
    if (err) throw err;
    for (filename of files) {
        if (path.extname(filename) == '.' + process.argv[3]) {
            console.log(filename);
        }
    }
});