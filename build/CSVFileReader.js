"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSVFileReader = void 0;
const node_fs_1 = require("node:fs");
const utils_1 = require("./utils");
class CSVFileReader {
    constructor(filename) {
        this.filename = filename;
        this.data = [];
    }
    read() {
        this.data = (0, node_fs_1.readFileSync)(this.filename, { encoding: 'utf8' })
            .split('\n')
            .map((row) => {
            return row.split(',');
        })
            .map((row) => {
            return [
                (0, utils_1.dateStringToDate)(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                // TYPE ASSERTION
                row[5],
                row[6]
            ];
        });
    }
}
exports.CSVFileReader = CSVFileReader;
