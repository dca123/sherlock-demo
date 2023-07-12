import { readFile, stream, utils } from "xlsx";
import { Workbook } from "exceljs";
import { parse } from "csv-parse/sync";
import { readFileSync } from "fs";

export async function csvToXlsx(src: string) {
  // console.time("read File");
  // const file = readFileSync(src);
  // const data = parse(file);
  // console.timeEnd("read File");

  console.time("json to sheet");
  const workbook = new Workbook();
  const sheet = await workbook.csv.readFile(src, {
    sheetName: "A",
  });
  console.timeEnd("json to sheet");

  return workbook;
}
// export function csvToXlsx(src: string) {
//   console.time("read File");
//   const file = readFileSync(src);
//   const data = parse(file);
//   console.timeEnd("read File");

//   console.time("json to sheet");
//   const sheet = utils.json_to_sheet(data);
//   console.timeEnd("json to sheet");

//   return sheet;
// }
// export function csvToXlsx(src: string) {
//   const workbook = readFile(src);
//   return workbook;
// }
