import * as Plot from "npm:@observablehq/plot";
import {html} from "npm:htl";

export function HistoricalPrice(data, name, units, period) {
    return html`
        <div class="card">
            <h2>${name}</h2>
            ${HistoricalPricePlot(filterForPeriod(data, period), units)}
        </div>
    `;
}

function filterForPeriod(data, period) {
    const years = {
        "5Y": 5,
        "10Y": 10,
        "20Y": 20,
        "50Y": 50
    }[period];

    if (years) {
        return data.filter(d => d.Date >= new Date().setFullYear(new Date().getFullYear() - years));
    }
    return data;
}

function HistoricalPricePlot(data, units) {
    return Plot.plot({
            style: {fontSize: "11pt"},
            y: {
                label: `Price (${units})`,
                grid: true,
                ticks: 5
            },
            marks: [
                Plot.lineY(data, {
                    x: "Date",
                    y: "Price",
                }),
                Plot.ruleX(data, Plot.pointerX({x: "Date", py: "Price", stroke: "red"})),
                Plot.dot(data, Plot.pointerX({x: "Date", y: "Price", stroke: "red"})),
                Plot.text(data, Plot.pointerX({
                    px: "Date",
                    py: "Price",
                    dy: -17,
                    frameAnchor: "top-right",
                    text: (d) => [`Date ${Plot.formatIsoDate(d.Date)}`, `Price ${d.Price.toFixed(2)} ${units}`].join("   ")}))
            ],
        })
}
