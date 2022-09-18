import { readFileSync } from 'node:fs';

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

const matches = readFileSync('football.csv', { encoding: 'utf8' })
  .split('\n')
  .map((row: string): string[] => {
    return row.split(',')
  })

//REFACTOR TO CLARIFY CONDITIONAL LOGIC (VARIABLES)
// const matchResult = {
//   homeWin: 'H',
//   awayWin: 'A',
//   draw: 'D',
// }

//REFACTOR TO ENUM (BASICALLY ANNOTATION TO OTHER ENGINEERS?)
enum matchResult {
  HomeWin = 'H',
  awayWin = 'A',
  Draw = 'D',
}

let manUnitedWins = 0
for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === matchResult.HomeWin) {
    manUnitedWins++
  } else if (match[2] === 'Man United' && match[5] === matchResult.awayWin) {
    manUnitedWins++
  }
}

console.log(`Manchester United Wins: ${manUnitedWins}`)
