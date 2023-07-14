import { Workbook } from "exceljs";
export function createSummary() {
  const workbook = new Workbook();
  const sheet = workbook.addWorksheet("Summary");
  const row = sheet.addRow(["Summary"]);
  row.getCell(1).fill = {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: "FF00FF00" },
  };
  sheet.addRow(["Total", 100]);
  return workbook;
}

createSummary();
