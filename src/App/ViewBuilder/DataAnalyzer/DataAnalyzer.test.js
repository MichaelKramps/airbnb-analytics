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