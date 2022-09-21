// import { CSVFileReader } from './CSVFileReader';
// import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';
import { MatchReader } from './MatchReader';
import { CSVFileReader } from './CSVFileReader';
import { Summary } from './Summary';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reportTargets/ConsoleReport';

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
// const parsedFile = new MatchReader('football.csv');
// parsedFile.read()
// console.log(parsedFile.data[0][0])

//FINAL REFACTOR TO SATISFY INTERFACE REQUIREMENTS
const csvFileReader = new CSVFileReader('football.csv')

const matchReader = new MatchReader(csvFileReader)
matchReader.load()

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

// REFACTOR OUT TO WinsAnalysis CLASS
// let manUnitedWins = 0
// for (let match of matchReader.matches) {
//   if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
//     manUnitedWins++
//   } else if (match[2] === 'Man United' && match[5] === MatchResult.awayWin) {
//     manUnitedWins++
//   }
// }

// console.log(`Manchester United Wins: ${manUnitedWins}`)

const winsAnalysis = new WinsAnalysis('Man United')
const consoleReport = new ConsoleReport()

const summary = new Summary(winsAnalysis, consoleReport)
summary.buildAndPrintReport(matchReader.matches)