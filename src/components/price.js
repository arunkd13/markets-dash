import * as Plot from "npm:@observablehq/plot";

export function HistoricalPrice(data, units) {
    return Plot.plot({
            grid: true,
            y: {
                label: `Price (${units})`
            },
            marks: [
                Plot.lineY(data, {x: "Date", y: "Price", tip: "x"}),
                Plot.dot(data, Plot.pointerX({x: "Date", y: "Price", stroke: "red", r: 5})),
                Plot.crosshairX(data, {x: "Date", y: "Price", color: "red"})
            ]
        })
}