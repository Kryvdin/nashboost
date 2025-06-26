import Papa from 'papaparse';

const SHEET_CSV_URL =
  'https://docs.google.com/spreadsheets/d/1sVp4rsHWCxCe3YaNsODwZrFfhU7NuZ2wialm1LKy5eU/export?format=csv';

export async function fetchCardsFromSheet(): Promise<any[]> {
  const response = await fetch(SHEET_CSV_URL);
  const csvData = await response.text();

  const parsed = Papa.parse(csvData, {
    header: true,
    skipEmptyLines: true,
  });

  return parsed.data;
}
