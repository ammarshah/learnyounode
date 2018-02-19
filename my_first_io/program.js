const fs = require('fs');

let contents_str = fs.readFileSync(process.argv[2]).toString();
let count_new_lines = (str) => str.split('\n').length - 1;
console.log(count_new_lines(contents_str));