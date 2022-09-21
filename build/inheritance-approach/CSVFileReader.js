"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSVFileReader = void 0;
const node_fs_1 = require("node:fs");
// type MatchData = [Date, string, string, number, number, MatchResult, string]
//REFACTOR - EVEN THOUGH THE POINT IS TO BE EXPLANATORY TO OTHERS WE WILL STILL MANAGE
// TO SUCK THE MEANING OUT CODE BECAUSE OF LAZINESS / ELITISM
// export abstract class CSVFileReader<TypeOfData> {
class CSVFileReader {
    constructor(filename) {
        this.filename = filename;
        // data: TypeOfData[] = [];
        this.data = [];
    }
    read() {
        this.data = (0, node_fs_1.readFileSync)(this.filename, { encoding: 'utf8' })
            .split('\n')
            .map((row) => {
            return row.split(',');
        })
            .map(this.mapRow);
    }
}
exports.CSVFileReader = CSVFileReader;
