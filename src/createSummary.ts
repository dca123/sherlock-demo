import { Workbook } from "exceljs";
export function createSummary() {
  const workbook = new Workbook();
  const sheet = workbook.addWorksheet("Summary");
  sheet.addRow(["Summary"]);
  sheet.addRow(["Total", 100]);
  return workbook;
}

createSummary();
