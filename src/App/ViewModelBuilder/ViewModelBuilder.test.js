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

it('Builds paid out totals for each listing', () => {
    let data = [
        ['start date', 'amount', 'listing'],
        ['01/01/2020', '300', 'first listing'],
        ['01/02/2020', '200', 'second listing'],
        ['01/03/2020', '500', 'second listing'],
        ['01/04/2020', '100', 'third listing'],
        ['01/05/2020', '100', 'first listing'],
        ['01/06/2020', '200', 'second listing']
    ]

    let viewModelBuilder = new ViewModelBuilder(data);
    let viewModel = viewModelBuilder.createViewModel();

    expect(viewModel.amountPaidByListing).toEqual(
        [
            {
                name: 'first listing',
                amountPaid: '400.00'
            },
            {
                name: 'second listing',
                amountPaid: '900.00'
            },
            {
                name: 'third listing',
                amountPaid: '100.00'
            }
        ]
    )
});

it('Builds paid out totals for each listing when dollar sign and decimals are present', () => {
    let data = [
        ['start date', 'amount', 'listing'],
        ['01/01/2020', '$300', 'first listing'],
        ['01/02/2020', '200', 'second listing'],
        ['01/03/2020', '$500.00', 'second listing'],
        ['01/04/2020', '100', 'third listing'],
        ['01/05/2020', '$100', 'first listing'],
        ['01/06/2020', '$200.23', 'second listing']
    ]

    let viewModelBuilder = new ViewModelBuilder(data);
    let viewModel = viewModelBuilder.createViewModel();

    expect(viewModel.amountPaidByListing).toEqual(
        [
            {
                name: 'first listing',
                amountPaid: '400.00'
            },
            {
                name: 'second listing',
                amountPaid: '900.23'
            },
            {
                name: 'third listing',
                amountPaid: '100.00'
            }
        ]
    )
});

it('Builds average price per night for each listing', () => {
    let data = [
        ['start date', 'amount', 'nights', 'listing'],
        ['01/01/2020', '300', '3', 'first listing'],
        ['01/02/2020', '200', '3', 'second listing'],
        ['01/03/2020', '500', '3', 'second listing'],
        ['01/04/2020', '100', '3', 'third listing'],
        ['01/05/2020', '100', '3', 'first listing'],
        ['01/06/2020', '200', '3', 'second listing']
    ]

    let viewModelBuilder = new ViewModelBuilder(data);
    let viewModel = viewModelBuilder.createViewModel();

    expect(viewModel.averagePricePerNightByListing).toEqual(
        [
            {
                name: 'first listing',
                averagePricePerNight: '66.67'
            },
            {
                name: 'second listing',
                averagePricePerNight: '100.00'
            },
            {
                name: 'third listing',
                averagePricePerNight: '33.33'
            }
        ]
    )
});

it('Builds average nights per guest for each listing', () => {
    let data = [
        ['start date', 'amount', 'nights', 'listing'],
        ['01/01/2020', '300', '2', 'first listing'],
        ['01/02/2020', '200', '3', 'second listing'],
        ['01/03/2020', '500', '4', 'second listing'],
        ['01/04/2020', '100', '5', 'third listing'],
        ['01/05/2020', '100', '3', 'first listing'],
        ['01/06/2020', '200', '5', 'second listing']
    ]

    let viewModelBuilder = new ViewModelBuilder(data);
    let viewModel = viewModelBuilder.createViewModel();

    expect(viewModel.averageNightsPerGuestByListing).toEqual(
        [
            {
                name: 'first listing',
                averageNightsPerGuest: '2.50'
            },
            {
                name: 'second listing',
                averageNightsPerGuest: '4.00'
            },
            {
                name: 'third listing',
                averageNightsPerGuest: '5.00'
            }
        ]
    )
});

it('Builds separate yearly totals for each listing (no spillover)', () => {
    let data = [
        ['start date', 'amount', 'nights', 'listing'],
        ['01/01/2020', '300', '2', 'first listing'],
        ['02/02/2020', '200', '3', 'second listing'],
        ['04/03/2020', '500', '4', 'second listing'],
        ['05/04/2020', '100', '5', 'second listing'],
        ['12/05/2020', '100', '3', 'first listing'],
        ['01/06/2021', '200', '5', 'second listing'],
        ['03/06/2021', '200', '5', 'first listing'],
        ['07/06/2021', '200', '5', 'first listing'],
        ['09/06/2021', '200', '5', 'second listing'],
    ]

    let viewModelBuilder = new ViewModelBuilder(data);
    let viewModel = viewModelBuilder.createViewModel();

    expect(viewModel.overallStatsByYearAndByListing).toEqual(
        [
            {
                name: 'first listing',
                years: [2020, 2021],
                amountPaid: [400, 400],
                totalNights: [5, 10]
            },
            {
                name: 'second listing',
                years: [2020, 2021],
                amountPaid: [800, 400],
                totalNights: [12, 10]
            }
        ]
    )
});

// it('Builds separate monthly totals for each listing', () => {
//     let data = [
//         ['start date', 'amount', 'nights', 'listing'],
//         ['01/01/2020', '300', '2', 'first listing'],
//         ['01/02/2020', '200', '3', 'second listing'],
//         ['01/03/2020', '500', '4', 'second listing'],
//         ['01/04/2020', '100', '5', 'third listing'],
//         ['01/05/2020', '100', '3', 'first listing'],
//         ['01/06/2020', '200', '5', 'second listing']
//     ]
//
//     let viewModelBuilder = new ViewModelBuilder(data);
//     let viewModel = viewModelBuilder.createViewModel();
//
//     expect(viewModel.averageNightsPerGuestByListing).toEqual(
//         [
//             {
//                 name: 'first listing',
//                 averageNightsPerGuest: '2.50'
//             },
//             {
//                 name: 'second listing',
//                 averageNightsPerGuest: '4.00'
//             },
//             {
//                 name: 'third listing',
//                 averageNightsPerGuest: '5.00'
//             }
//         ]
//     )
// });