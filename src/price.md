---
theme: dashboard
title: Price
toc: false
---

```js
import {HistoricalPrice} from './components/price.js';
```

```js
const gold = FileAttachment("data/price-gold.csv").csv({typed: true});
const usd = FileAttachment("data/price-usd.csv").csv({typed: true});
const crude = FileAttachment("data/price-crude.csv").csv({typed: true});
const naturalgas = FileAttachment("data/price-naturalgas.csv").csv({typed: true});
```

<div class="grid grid-cols-2">
  <div class="card">
    <h2>Gold</h2>
    ${display(HistoricalPrice(gold, "USD / oz t"))}
  </div>
  <div class="card">
    <h2>USD</h2>
    ${display(HistoricalPrice(usd, "INR / USD"))}
  </div>
  <div class="card">
    <h2>Crude</h2>
    ${display(HistoricalPrice(crude, "USD / barrel"))}
  </div>
  <div class="card">
    <h2>Natural Gas</h2>
    ${display(HistoricalPrice(naturalgas, "USD / million Btu"))}
  </div>
</div>