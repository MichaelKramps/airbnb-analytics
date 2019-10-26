import DataFilterer from './DataFilterer'

it('Filters out title row if present', () => {
    let data = [
        ["nights", "listing", "amount", "type"],
        ['2', 'awesome listing', '123.00', 'booking']
    ];

    let filteredData = DataFilterer.filterOutTitleRow(data);

    expect(filteredData).toEqual([
        ['2', 'awesome listing', '123.00', 'booking']
    ])
})

it('Filters out title row if present and a title has a space in it', () => {
    let data = [
        ["nights", "listing", "payment amount", "type"],
        ['2', 'awesome listing', '123.00', 'booking']
    ];

    let filteredData = DataFilterer.filterOutTitleRow(data);

    expect(filteredData).toEqual([
        ['2', 'awesome listing', '123.00', 'booking']
    ])
})

it('Doesnt filter if title row not present', () => {
    let data = [
        ['2', 'awesome listing', '123.00', 'booking'],
        ['3', 'awesome listing', '187.00', 'booking']
    ];

    let filteredData = DataFilterer.filterOutTitleRow(data);

    expect(filteredData).toEqual(data);
})