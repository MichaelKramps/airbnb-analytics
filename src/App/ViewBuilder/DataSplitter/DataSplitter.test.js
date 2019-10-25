import DataSplitter from "./DataSplitter";

it('splits data by start date', () => {
    let data = [
        ['start date', 'amount'],
        ['01/01/2020', '100'],
        ['01/02/2020', '100'],
        ['01/03/2020', '100'],
        ['01/04/2020', '100'],
        ['01/05/2020', '100'],
        ['01/06/2020', '100']
    ]

    let dataSplitter = new DataSplitter(data);

    let splitData = dataSplitter.splitByStartDate('01/03/2020');

    expect(splitData.beforeDate).toEqual([
        ['01/01/2020', '100'],
        ['01/02/2020', '100']
    ])

    expect(splitData.afterDate).toEqual([
        ['01/03/2020', '100'],
        ['01/04/2020', '100'],
        ['01/05/2020', '100'],
        ['01/06/2020', '100']
    ])
})