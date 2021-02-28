import DataAnalyzer from "./DataAnalyzer";

it('Adds up total payout amount', () => {
    let data = [
        ["listing", "paid out"],
        ["abc", "123"],
        ["abc", "456"],
        ["abc", "789"],
        ["abc", "100"]
    ];

    let dataAnalyzer = DataAnalyzer.buildTestDataAnalyzer(data);
    let totalPayout = dataAnalyzer.getTotalPayout();

    expect(totalPayout).toBe(1468);
});

it('Adds up total number of nights', () => {
    let data = [
        ["listing", "paid out", 'nights'],
        ["abc", "123", '2'],
        ["abc", "456", '7'],
        ["abc", "789", '1'],
        ["abc", "100", '2']
    ];

    let dataAnalyzer = DataAnalyzer.buildTestDataAnalyzer(data);
    let numberOfNights = dataAnalyzer.getNumberOfNights();

    expect(numberOfNights).toBe(12);
});

it('Adds up total number of guests', () => {
    let data = [
        ["listing", "paid out"],
        ["abc", "123"],
        ["abc", "456"],
        ["abc", "789"],
        ["abc", "100"]
    ];

    let dataAnalyzer = DataAnalyzer.buildTestDataAnalyzer(data);
    let numberOfGuests = dataAnalyzer.getNumberOfGuests();

    expect(numberOfGuests).toBe(4);
});

it('Adds up total number of guests of passed in data, instead of data from constructor', () => {
    let data = [
        ["listing", "paid out"],
        ["abc", "123"],
        ["abc", "456"],
        ["abc", "789"],
        ["abc", "100"]
    ];

    let dataAnalyzer = DataAnalyzer.buildTestDataAnalyzer(data);

    let splitData = [
        ["abc", "123"],
        ["abc", "456"]
    ];
    let totalPayout = dataAnalyzer.getNumberOfGuests(splitData);

    expect(totalPayout).toBe(2);
});

it('adds up total paid out', () => {
    let data = [
        ["listing", "amount"],
        ["abc", "$123"],
        ["abc", "456"],
        ["abc", "$789.23"],
        ["abc", "100"]
    ];

    let dataAnalyzer = DataAnalyzer.buildTestDataAnalyzer(data);

    let totalPayout = dataAnalyzer.getAmountPaid();

    expect(totalPayout).toBe(1468.23);
});