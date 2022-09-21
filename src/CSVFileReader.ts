import { readFileSync } from 'node:fs';

export class CSVFileReader {

  data: string[][] = [];
  constructor(public filename: string) { }

  read(): void {
    this.data = readFileSync(this.filename, { encoding: 'utf8' })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',')
      })

  }


}