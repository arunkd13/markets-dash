---
theme: dashboard
title: Price
toc: false
---

```js
import {HistoricalPrice} from './components/price.js';
```

```js
const period = view(Inputs.radio(["5Y", "10Y", "20Y", "50Y", "Max"], {
    label: html`<b>Period</b>`,
    value: "50Y"
  }));
```

```js
const gold = FileAttachment("data/price-gold.csv").csv({typed: true});
const usd = FileAttachment("data/price-usd.csv").csv({typed: true});
const crude = FileAttachment("data/price-crude.csv").csv({typed: true});
const naturalgas = FileAttachment("data/price-naturalgas.csv").csv({typed: true});
```

<div class="grid grid-cols-2">
    ${display(HistoricalPrice(gold, "Gold", "USD / oz t", period))}
    ${display(HistoricalPrice(usd, "USD", "INR / USD", period))}
    ${display(HistoricalPrice(crude, "Crude", "USD / barrel", period))}
    ${display(HistoricalPrice(naturalgas, "Natural Gas", "USD / million Btu", period))}
  </div>
</div>