
//MY CODE (DOESN'T HANDLE DATE OBJECT MONTH WELL)
// export const parseLine = (parsedFile) => {
//   parsedFile.data.map(line => {
//     line[0] = new Date(line[0].split('/').reverse())
//     line[3] = parseInt(line[3])
//     line[4] = parseInt(line[4])
//     return line
//   })
// }

export const dateStringToDate = (dateString: string): Date => {
  const dateItems = dateString.split('/').map((value: string): number => {
    return parseInt(value)
  })

  return new Date(dateItems[2], dateItems[1] - 1, dateItems[0])
}
