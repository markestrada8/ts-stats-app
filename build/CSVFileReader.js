"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSVFileReader = void 0;
const node_fs_1 = require("node:fs");
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
        });
    }
}
exports.CSVFileReader = CSVFileReader;
