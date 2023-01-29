import fs from 'fs';

let hrstart = process.hrtime();
const array =[];

fs.readFileSync("scripts/data/wordle-eng.txt", "utf-8")
  .split(/\r?\n/)
  .forEach( (line) => {
    array.push(line);
  });

fs.writeFileSync("src/data/wordle-eng.json", JSON.stringify(array));

let hrend = process.hrtime(hrstart);
  