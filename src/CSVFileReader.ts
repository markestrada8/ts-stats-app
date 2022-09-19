import { readFileSync } from 'node:fs';
import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';

type MatchData = [Date, string, string, number, number, MatchResult, string]

export class CSVFileReader {

  data: MatchData[] = [];
  constructor(public filename: string) { }

  read(): void {
    this.data = readFileSync(this.filename, { encoding: 'utf8' })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',')
      })
      .map((row: string[]): MatchData => {
        return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          // TYPE ASSERTION
          row[5] as MatchResult,
          row[6]
        ]
      })
  }


}