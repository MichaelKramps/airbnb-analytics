import DataOrderer from "./DataOrderer";
import TitleIndexer from "../TitleIndexer/TitleIndexer";
import DataFilterer from "../DataFilterer/DataFilterer";

it('Filters out title row if present', () => {
    let data = [
        ["start date", "listing", "amount", "type"],
        ['10/7/2020', 'awesome listing', '123.00', 'booking'],
        ['9/7/2020', 'awesome listing', '123.00', 'booking'],
        ['10/8/2020', 'awesome listing', '123.00', 'booking'],
        ['10/7/2019', 'awesome listing', '123.00', 'booking'],
        ['10/17/2020', 'awesome listing', '123.00', 'booking']
    ];

    let filteredData = DataOrderer.orderChronologically(DataFilterer.filterOutTitleRow(data), TitleIndexer.getTitleIndexes(data[0]));

    console.log(filteredData);

    expect(filteredData).toEqual([
        [ '10/17/2020', 'awesome listing', '123.00', 'booking' ],
        [ '10/8/2020', 'awesome listing', '123.00', 'booking' ],
        [ '10/7/2020', 'awesome listing', '123.00', 'booking' ],
        [ '9/7/2020', 'awesome listing', '123.00', 'booking' ],
        [ '10/7/2019', 'awesome listing', '123.00', 'booking' ]
    ])
})