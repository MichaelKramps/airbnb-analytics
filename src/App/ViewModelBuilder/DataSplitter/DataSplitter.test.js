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

    let splitData = dataSplitter.splitByCustomStartDate('01/03/2020');

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

it('splits data by listing name', () => {
    let data = [
        ['start date', 'amount', 'listing'],
        ['01/01/2020', '100', 'first listing'],
        ['01/02/2020', '100', 'second listing'],
        ['01/03/2020', '100', 'second listing'],
        ['01/04/2020', '100', 'third listing'],
        ['01/05/2020', '100', 'first listing'],
        ['01/06/2020', '100', 'second listing']
    ]

    let dataSplitter = new DataSplitter(data);

    let splitData = dataSplitter.splitByListingName();

    expect(splitData[0]).toEqual([
        ['01/01/2020', '100', 'first listing'],
        ['01/05/2020', '100', 'first listing']
    ])

    expect(splitData[1]).toEqual([
        ['01/02/2020', '100', 'second listing'],
        ['01/03/2020', '100', 'second listing'],
        ['01/06/2020', '100', 'second listing']
    ])

    expect(splitData[2]).toEqual([
        ['01/04/2020', '100', 'third listing']
    ])
})