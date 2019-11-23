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

it('splits data by year', () => {
    let data = [
        ['start date', 'nights', 'amount', 'listing'],
        ['01/01/2020', '1', '100', 'first listing'],
        ['01/02/2020', '1', '100', 'second listing'],
        ['01/03/2020', '1', '100', 'second listing'],
        ['01/04/2021', '1', '100', 'third listing'],
        ['01/05/2021', '1', '100', 'first listing'],
        ['01/06/2022', '1', '100', 'second listing']
    ]

    let dataSplitter = new DataSplitter(data);

    let splitData = dataSplitter.splitByYear();

    expect(splitData[0]).toEqual([
        ['01/01/2020', '1', '100', 'first listing'],
        ['01/02/2020', '1', '100', 'second listing'],
        ['01/03/2020', '1', '100', 'second listing']
    ])

    expect(splitData[1]).toEqual([
        ['01/04/2021', '1', '100', 'third listing'],
        ['01/05/2021', '1', '100', 'first listing']
    ])

    expect(splitData[2]).toEqual([
        ['01/06/2022', '1', '100', 'second listing']
    ])
})

it('splits data by year with spillover', () => {
    let data = [
        ['start date', 'nights', 'amount', 'listing'],
        ['01/01/2020', '1', '100', 'first listing'],
        ['01/02/2020', '1', '100', 'second listing'],
        ['12/25/2020', '12', '1200', 'second listing'],
        ['01/04/2021', '1', '100', 'third listing'],
        ['01/05/2021', '1', '100', 'first listing'],
        ['01/06/2022', '1', '100', 'second listing']
    ]

    let dataSplitter = new DataSplitter(data);

    let splitData = dataSplitter.splitByYear();

    expect(splitData[0]).toEqual([
        ['01/01/2020', '1', '100', 'first listing'],
        ['01/02/2020', '1', '100', 'second listing'],
        ['12/25/2020', '7', '700', 'second listing']
    ])

    expect(splitData[1]).toEqual([
        ['01/01/2021', '5', '500', 'third listing'],
        ['01/04/2021', '1', '100', 'third listing'],
        ['01/05/2021', '1', '100', 'first listing']
    ])

    expect(splitData[2]).toEqual([
        ['01/06/2022', '100', 'second listing']
    ])
})

it('splits data by month', () => {
    let data = [
        ['start date', 'nights', 'amount', 'listing'],
        ['01/01/2020', '1', '100', 'first listing'],
        ['01/02/2020', '1', '100', 'second listing'],
        ['01/03/2020', '1', '100', 'second listing'],
        ['02/04/2020', '1', '100', 'third listing'],
        ['03/05/2020', '1', '100', 'first listing'],
        ['03/06/2020', '1', '100', 'second listing'],
        ['03/07/2021', '1', '100', 'second listing']
    ]

    let dataSplitter = new DataSplitter(data);

    let splitData = dataSplitter.splitByMonth();

    expect(splitData[0]).toEqual([
        ['01/01/2020', '1', '100', 'first listing'],
        ['01/02/2020', '1', '100', 'second listing'],
        ['01/03/2020', '1', '100', 'second listing']
    ])

    expect(splitData[1]).toEqual([
        ['02/04/2020', '1', '100', 'third listing']
    ])

    expect(splitData[2]).toEqual([
        ['03/05/2020', '1', '100', 'first listing'],
        ['03/06/2020', '1', '100', 'second listing']
    ])

    expect(splitData[3]).toEqual([
        ['03/07/2021', '1', '100', 'second listing']
    ])
})

it('splits data by month with spillover', () => {
    let data = [
        ['start date', 'nights', 'amount', 'listing'],
        ['01/01/2020', '1', '100', 'first listing'],
        ['01/02/2020', '1', '100', 'second listing'],
        ['01/30/2020', '6', '600', 'second listing'],
        ['02/04/2020', '1', '100', 'third listing'],
        ['03/05/2020', '1', '100', 'first listing'],
        ['03/06/2020', '1', '100', 'second listing'],
        ['03/07/2021', '1', '100', 'second listing']
    ]

    let dataSplitter = new DataSplitter(data);

    let splitData = dataSplitter.splitByMonth();

    expect(splitData[0]).toEqual([
        ['01/01/2020', '1', '100', 'first listing'],
        ['01/02/2020', '1', '100', 'second listing'],
        ['01/30/2020', '2', '200', 'second listing']
    ])

    expect(splitData[1]).toEqual([
        ['02/01/2020', '4', '400', 'third listing'],
        ['02/04/2020', '1', '100', 'third listing']
    ])

    expect(splitData[2]).toEqual([
        ['03/05/2020', '1', '100', 'first listing'],
        ['03/06/2020', '1', '100', 'second listing']
    ])

    expect(splitData[3]).toEqual([
        ['03/07/2021', '1', '100', 'second listing']
    ])
})