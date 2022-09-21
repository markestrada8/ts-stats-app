"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const CSVFileReader_1 = require("./CSVFileReader");
const Summary_1 = require("./Summary");
const WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
const ConsoleReport_1 = require("./reportTargets/ConsoleReport");
const HTMLReport_1 = require("./reportTargets/HTMLReport");
//NEW INDEX FILE
//READ FILE
const csvFileReader = new CSVFileReader_1.CSVFileReader('football.csv');
//FORMAT DATA FOR SPECIFIC USE
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
//CALL(INSTANTIATE) SPECIFIC ANALYSIS TOOL AND OUTPUT METHOD
const winsAnalysis = new WinsAnalysis_1.WinsAnalysis('Man United');
const consoleReport = new ConsoleReport_1.ConsoleReport();
//INSTANTIATE REFERENCE HUB WITH COMPOSITION REFERENCES AND EXECUTE REPORT
const summary = new Summary_1.Summary(winsAnalysis, consoleReport);
summary.buildAndPrintReport(matchReader.matches);
//HTML
const summaryTwo = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Man United'), new HTMLReport_1.HTMLReport());
summaryTwo.buildAndPrintReport(matchReader.matches);
//HTML 2 - STATIC METHOD ON SUMMARY
const summaryThree = Summary_1.Summary.winsAnalysisWithHTMLReport('Man United');
summaryThree.buildAndPrintReport(matchReader.matches);
