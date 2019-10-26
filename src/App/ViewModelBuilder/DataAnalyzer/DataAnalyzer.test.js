import DataAnalyzer from "./DataAnalyzer";

it('Adds up total payout amount', () => {
    let data = [
        ["listing", "paid out"],
        ["abc", "123"],
        ["abc", "456"],
        ["abc", "789"],
        ["abc", "100"]
    ];

    let dataAnalyzer = new DataAnalyzer(data);
    let totalPayout = dataAnalyzer.getTotalPayout();

    expect(totalPayout).toBe(1468);
});

it('Adds up total number of guests', () => {
    let data = [
        ["listing", "paid out"],
        ["abc", "123"],
        ["abc", "456"],
        ["abc", "789"],
        ["abc", "100"]
    ];

    let dataAnalyzer = new DataAnalyzer(data);
    let totalPayout = dataAnalyzer.getNumberOfGuests();

    expect(totalPayout).toBe(4);
});

it('Adds up total number of guests of passed in data, instead of data from constructor', () => {
    let data = [
        ["listing", "paid out"],
        ["abc", "123"],
        ["abc", "456"],
        ["abc", "789"],
        ["abc", "100"]
    ];

    let dataAnalyzer = new DataAnalyzer(data);

    let splitData = [
        ["abc", "123"],
        ["abc", "456"]
    ];
    let totalPayout = dataAnalyzer.getNumberOfGuests(splitData);

    expect(totalPayout).toBe(2);
});