import * as csv from 'csv';
import { Stream } from 'node:stream';

const url = "https://datahub.io/core/exchange-rates/_r/-/data/monthly.csv";
const response = await fetch(url);
if (!response.ok) throw new Error(`fetch failed: ${response.status}`);

Stream.Readable.fromWeb(response.body)
.pipe(csv.parse())
.pipe(csv.transform(record => record[1] === "India" ? record.toSpliced(1, 1) : null))
.pipe(csv.stringify({
  header: true,
  columns: ["Date", "Price"]
}))
.pipe(process.stdout);
