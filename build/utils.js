"use strict";
//MY CODE (DOESN'T HANDLE DATE OBJECT MONTH WELL)
// export const parseLine = (parsedFile) => {
//   parsedFile.data.map(line => {
//     line[0] = new Date(line[0].split('/').reverse())
//     line[3] = parseInt(line[3])
//     line[4] = parseInt(line[4])
//     return line
//   })
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
const dateStringToDate = (dateString) => {
    const dateItems = dateString.split('/').map((value) => {
        return parseInt(value);
    });
    return new Date(dateItems[2], dateItems[1] - 1, dateItems[0]);
};
exports.dateStringToDate = dateStringToDate;
