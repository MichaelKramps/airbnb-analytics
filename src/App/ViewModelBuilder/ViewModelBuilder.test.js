import ViewModelBuilder from "./ViewModelBuilder";

it('Builds number of stays totals for each listing', () => {
    let data = [
        ['start date', 'amount', 'listing'],
        ['01/01/2020', '100', 'first listing'],
        ['01/02/2020', '100', 'second listing'],
        ['01/03/2020', '100', 'second listing'],
        ['01/04/2020', '100', 'third listing'],
        ['01/05/2020', '100', 'first listing'],
        ['01/06/2020', '100', 'second listing']
    ]

    let viewModelBuilder = new ViewModelBuilder(data);
    let viewModel = viewModelBuilder.createViewModel();

    expect(viewModel.totalStaysByListing).toEqual(
        [
            {
                name: 'first listing',
                totalStays: 2
            },
            {
                name: 'second listing',
                totalStays: 3
            },
            {
                name: 'third listing',
                totalStays: 1
            }
        ]
    )
});

it('excludes blank listing names when building total stays', () => {
    let data = [
        ['start date', 'amount', 'listing'],
        ['01/01/2020', '100', 'first listing'],
        ['01/02/2020', '100', ''],
        ['01/03/2020', '100', '  '],
        ['01/04/2020', '100', 'third listing'],
        ['01/05/2020', '100', 'first listing'],
        ['01/06/2020', '100', null]
    ]

    let viewModelBuilder = new ViewModelBuilder(data);
    let viewModel = viewModelBuilder.createViewModel();

    expect(viewModel.totalStaysByListing).toEqual(
        [
            {
                name: 'first listing',
                totalStays: 2
            },
            {
                name: 'third listing',
                totalStays: 1
            }
        ]
    )
});

it('Builds number of nights totals for each listing', () => {
    let data = [
        ['start date', 'nights', 'listing'],
        ['01/01/2020', '3', 'first listing'],
        ['01/02/2020', '2', 'second listing'],
        ['01/03/2020', '5', 'second listing'],
        ['01/04/2020', '1', 'third listing'],
        ['01/05/2020', '1', 'first listing'],
        ['01/06/2020', '2', 'second listing']
    ]

    let viewModelBuilder = new ViewModelBuilder(data);
    let viewModel = viewModelBuilder.createViewModel();

    expect(viewModel.totalNightsByListing).toEqual(
        [
            {
                name: 'first listing',
                totalNights: 4
            },
            {
                name: 'second listing',
                totalNights: 9
            },
            {
                name: 'third listing',
                totalNights: 1
            }
        ]
    )
});