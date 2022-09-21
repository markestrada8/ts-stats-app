import { MatchReader } from './MatchReader';
import { CSVFileReader } from './CSVFileReader';
import { Summary } from './Summary';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { HTMLReport } from './reportTargets/HTMLReport';

//NEW INDEX FILE

//READ FILE
const csvFileReader = new CSVFileReader('football.csv')

//FORMAT DATA FOR SPECIFIC USE
const matchReader = new MatchReader(csvFileReader)
matchReader.load()

//CALL(INSTANTIATE) SPECIFIC ANALYSIS TOOL AND OUTPUT METHOD
const winsAnalysis = new WinsAnalysis('Man United')
const consoleReport = new ConsoleReport()

//INSTANTIATE REFERENCE HUB WITH COMPOSITION REFERENCES AND EXECUTE REPORT
const summary = new Summary(winsAnalysis, consoleReport)
summary.buildAndPrintReport(matchReader.matches)

//HTML
const summaryTwo = new Summary(new WinsAnalysis('Man United'), new HTMLReport())
summaryTwo.buildAndPrintReport(matchReader.matches)

//HTML 2 - STATIC METHOD ON SUMMARY
const summaryThree = Summary.winsAnalysisWithHTMLReport('Man United')
summaryThree.buildAndPrintReport(matchReader.matches)
