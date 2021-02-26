import DataFilterer from './DataFilterer'
import TitleIndexer from "../TitleIndexer/TitleIndexer";

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

it('filters out payout rows', () => {
    let data = [
        ['type', 'listing'],
        ['payout', 'awesome listing'],
        ['reservation', 'awesome listing']
    ];

    let filteredData = DataFilterer.filterOutPayouts(DataFilterer.filterOutTitleRow(data), TitleIndexer.getTitleIndexes(data[0]));

    expect(filteredData).toEqual([
        ['reservation', 'awesome listing']
    ]);
})

it('filters out blank listing names', () => {
    let data = [
        ['type', 'listing'],
        ['payout', ''],
        ['reservation', 'awesome listing'],
        ['payout', ' '],
        ['reservation', null],
        ['reservation', undefined]
    ];

    let filteredData = DataFilterer.filterOutBlankListings(DataFilterer.filterOutTitleRow(data), TitleIndexer.getTitleIndexes(data[0]));

    expect(filteredData).toEqual([
        ['reservation', 'awesome listing']
    ]);
})

it('filters out duplicate records and titles', () => {
    let data = [
        ['confirmation code', 'type', 'listing'],
        ['HFG123', 'payout', ''],
        ['HFG234', 'reservation', 'awesome listing'],
        ['HFH123', 'payout', ' '],
        ['confirmation code', 'type', 'listing'],
        ['HFG234', 'reservation', 'awesome listing'],
        ['HFG623', 'reservation', 'awesome listing']
    ];

    let filteredData = DataFilterer.filterOutDuplicates(data, TitleIndexer.getTitleIndexes(data[0]));

    expect(filteredData).toEqual([
        ['confirmation code', 'type', 'listing'],
        ['HFG123', 'payout', ''],
        ['HFG234', 'reservation', 'awesome listing'],
        ['HFH123', 'payout', ' '],
        ['HFG623', 'reservation', 'awesome listing']
    ]);
})