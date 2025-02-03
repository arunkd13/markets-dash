---
theme: dashboard
title: Price
toc: false
---

# Gold

```js
const gold = FileAttachment("data/price-gold.csv").csv({typed: true})
```

```js
import {HistoricalPrice} from './components/price.js';
display(HistoricalPrice(gold))
```
