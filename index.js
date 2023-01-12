const input = Number.parseInt(process.argv.slice(2)[0], 10);

const outputPairs = [];

const newspapersCost = {
    "TOI": [3, 3, 3, 3, 3, 5, 6],
    "Hindu": [2.5, 2.5, 2.5, 2.5, 2.5, 4, 4],
    "ET": [4, 4, 4, 4, 4, 4, 10],
    "BM": [1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5],
    "HT": [2, 2, 2, 2, 2, 4, 4]
};

const totalCostInAWeek = Object.entries(newspapersCost).reduce((acc, [newspaper, costList]) => {
    return {
        ...acc,
        [newspaper]: costList.reduce((prev, cost) => cost + prev, 0),
    }
}, {});

const newspapers = Object.keys(newspapersCost);

for (let i = 0; i < newspapers.length - 1; i++) {
    for (let j = i + 1; j < newspapers.length; j++) {
        const sum = totalCostInAWeek[newspapers[i]] + totalCostInAWeek[newspapers[j]];
        if (sum <= input) {
            outputPairs.push([newspapers[i], newspapers[j]]);
        }
    }
}

console.log(outputPairs);

