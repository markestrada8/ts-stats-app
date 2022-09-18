"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_fs_1 = require("node:fs");
// macOS, Linux, and Windows
// MY CODE
// const matches = readFileSync('football.csv', { encoding: 'utf8' });
// const lines = matches.split('\n')
// const matchesList = []
// lines.forEach((line) => {
//   matchesList.push(Array(line.split(',')));
// })
// matchesList.forEach((line) => {
//   console.log(line)
// })
// console.log(matchesList)
// HIS CODE (RAW APPROACH)
const matches = (0, node_fs_1.readFileSync)('football.csv', { encoding: 'utf8' })
    .split('\n')
    .map((row) => {
    return row.split(',');
});
//REFACTOR TO CLARIFY CONDITIONAL LOGIC (VARIABLES)
// const matchResult = {
//   homeWin: 'H',
//   awayWin: 'A',
//   draw: 'D',
// }
//REFACTOR TO ENUM (BASICALLY ANNOTATION TO OTHER ENGINEERS?)
var matchResult;
(function (matchResult) {
    matchResult["HomeWin"] = "H";
    matchResult["awayWin"] = "A";
    matchResult["Draw"] = "D";
})(matchResult || (matchResult = {}));
let manUnitedWins = 0;
for (let match of matches) {
    if (match[1] === 'Man United' && match[5] === matchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === matchResult.awayWin) {
        manUnitedWins++;
    }
}
console.log(`Manchester United Wins: ${manUnitedWins}`);
