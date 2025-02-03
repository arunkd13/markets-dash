async function csv(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`fetch failed: ${response.status}`);
  return await response.text();
}

const price = await csv('https://datahub.io/core/gold-prices/_r/-/data/monthly.csv');

process.stdout.write(price);