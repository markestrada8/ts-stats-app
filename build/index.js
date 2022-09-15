"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_fs_1 = require("node:fs");
// macOS, Linux, and Windows
const newFile = (0, node_fs_1.readFileSync)('/football.csv');
console.log(newFile);
