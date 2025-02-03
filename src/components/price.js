import * as Plot from "npm:@observablehq/plot";

export function HistoricalPrice(data) {
    return Plot.plot({
            marks: [
                Plot.lineY(data, {x: "Date", y: "Price", tip: "x"}),
                Plot.dot(data, Plot.pointerX({x: "Date", y: "Price", stroke: "red"})),
            ]
        })
}