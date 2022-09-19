import { CSVFileReader } from './CSVFileReader';
import { MatchResult } from './MatchResult';

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

//REFACTOR CSV READER
const parsedFile = new CSVFileReader('football.csv');
parsedFile.read()
console.log(parsedFile.data[0][0])

// HIS CODE (RAW APPROACH)

// const matches = readFileSync('football.csv', { encoding: 'utf8' })
//   .split('\n')
//   .map((row: string): string[] => {
//     return row.split(',')
//   })

//REFACTOR TO CLARIFY CONDITIONAL LOGIC (VARIABLES)
// const matchResult = {
//   homeWin: 'H',
//   awayWin: 'A',
//   draw: 'D',
// }

//REFACTOR TO ENUM (BASICALLY ANNOTATION TO OTHER ENGINEERS?)


let manUnitedWins = 0
for (let match of parsedFile.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++
  } else if (match[2] === 'Man United' && match[5] === MatchResult.awayWin) {
    manUnitedWins++
  }
}

console.log(`Manchester United Wins: ${manUnitedWins}`)
