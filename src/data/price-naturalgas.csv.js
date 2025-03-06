import * as csv from 'csv';
import { Stream } from 'node:stream';

const url = 'https://datahub.io/core/natural-gas/_r/-/data/monthly.csv';

const response = await fetch(url);
if (!response.ok) throw new Error(`fetch failed: ${response.status}`);

Stream.Readable.fromWeb(response.body)
.pipe(csv.parse({columns: true}))
.pipe(csv.stringify({
  header: true,
  columns: {Month: "Date", Price: "Price"}
}))
.pipe(process.stdout);
