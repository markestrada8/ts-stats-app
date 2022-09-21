import { readFileSync } from 'node:fs';

// type MatchData = [Date, string, string, number, number, MatchResult, string]

//REFACTOR - EVEN THOUGH THE POINT IS TO BE EXPLANATORY TO OTHERS WE WILL STILL MANAGE
// TO SUCK THE MEANING OUT CODE BECAUSE OF LAZINESS / ELITISM
// export abstract class CSVFileReader<TypeOfData> {
export abstract class CSVFileReader<T> {

  // data: TypeOfData[] = [];
  data: T[] = [];
  constructor(public filename: string) { }

  // abstract mapRow(row: string[]): TypeOfData
  abstract mapRow(row: string[]): T

  read(): void {
    this.data = readFileSync(this.filename, { encoding: 'utf8' })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',')
      })
      .map(this.mapRow)
  }


}