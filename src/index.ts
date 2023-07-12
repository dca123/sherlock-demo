import { utils, writeFileXLSX, read } from "xlsx";
import { createSummary } from "./createSummary";
import { csvToXlsx } from "./csvToXlsx";
async function main() {
  const workbook = utils.book_new();
  const summary = createSummary();
  const stream = await summary.xlsx.writeBuffer();
  const data = read(stream);

  console.time("csvToXlsx");
  const importData = await csvToXlsx("./src/input/coffee.csv");
  console.timeEnd("csvToXlsx");

  const iData = read(await importData.xlsx.writeBuffer());

  utils.book_append_sheet(workbook, data.Sheets["Summary"], "Summary");
  console.time("append");
  utils.book_append_sheet(workbook, iData.Sheets["A"], "Sheet 1");
  console.timeEnd("append");

  await writeFileXLSX(workbook, "output.xlsx");
}

main();
