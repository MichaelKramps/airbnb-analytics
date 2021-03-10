import ViewModelSorter from "./ViewModelSorter";

it('Orders by Payout', () => {
    let viewModel = {
        totalStatsByListing: [
            {name: "listing 1", totalPaid: "1999.99"},
            {name: "listing 2", totalPaid: "2000.00"},
            {name: "listing 3", totalPaid: "1998.99"}
        ]
    };

    let orderedArray = ViewModelSorter.forwardOrderBy(viewModel.totalStatsByListing, "totalPaid");


    expect(orderedArray).toEqual([
        {name: "listing 2", totalPaid: "2000.00"},
        {name: "listing 1", totalPaid: "1999.99"},
        {name: "listing 3", totalPaid: "1998.99"}
    ])
})

it('Reverse orders by Payout', () => {
    let viewModel = {
        totalStatsByListing: [
            {name: "listing 1", totalPaid: "1999.99"},
            {name: "listing 2", totalPaid: "2000.00"},
            {name: "listing 3", totalPaid: "1998.99"}
        ]
    };

    let orderedArray = ViewModelSorter.reverseOrderBy(viewModel.totalStatsByListing, "totalPaid");


    expect(orderedArray).toEqual([
        {name: "listing 3", totalPaid: "1998.99"},
        {name: "listing 1", totalPaid: "1999.99"},
        {name: "listing 2", totalPaid: "2000.00"}
    ])
})

it('Orders forward by Payout the first time', () => {
    let viewModel = {
        totalStatsByListing: [
            {name: "listing 1", totalPaid: "1999.99"},
            {name: "listing 2", totalPaid: "2000.00"},
            {name: "listing 3", totalPaid: "1998.99"}
        ]
    };

    let filteredData = ViewModelSorter.orderBy(viewModel,"totalStatsByListing", "totalPaid");


    expect(filteredData).toEqual({
        totalStatsByListing: [
            {name: "listing 2", totalPaid: "2000.00"},
            {name: "listing 1", totalPaid: "1999.99"},
            {name: "listing 3", totalPaid: "1998.99"}
        ]
    })
})

it('Orders reverse by Payout if already ordered', () => {
    let viewModel = {
        totalStatsByListing: [
            {name: "listing 2", totalPaid: "2000.00"},
            {name: "listing 1", totalPaid: "1999.99"},
            {name: "listing 3", totalPaid: "1998.99"}
        ]
    };

    let filteredData = ViewModelSorter.orderBy(viewModel, "totalStatsByListing", "totalPaid");


    expect(filteredData).toEqual({
        totalStatsByListing: [
            {name: "listing 3", totalPaid: "1998.99"},
            {name: "listing 1", totalPaid: "1999.99"},
            {name: "listing 2", totalPaid: "2000.00"}
        ]
    })
})

it('Orders nested data forward by Payout only for correct listing', () => {
    let viewModel = {
        overallStatsByYearAndByListing: [
            {
                name: "listing1",
                years: [
                    {year: "2010", totalPaid: "1999.99"},
                    {year: "2011", totalPaid: "2000.00"},
                    {year: "2012", totalPaid: "1998.99"}
                ]
            },
            {
                name: "listing2",
                years: [
                    {year: "2010", totalPaid: "1999.99"},
                    {year: "2011", totalPaid: "2000.00"},
                    {year: "2012", totalPaid: "1998.99"}
                ]
            }
        ]
    };

    let filteredData = ViewModelSorter.orderYearsBy(viewModel,0, "totalPaid");


    expect(filteredData).toEqual({
        overallStatsByYearAndByListing: [
            {
                name: "listing1",
                years: [
                    {year: "2011", totalPaid: "2000.00"},
                    {year: "2010", totalPaid: "1999.99"},
                    {year: "2012", totalPaid: "1998.99"}
                ]
            },
            {
                name: "listing2",
                years: [
                    {year: "2010", totalPaid: "1999.99"},
                    {year: "2011", totalPaid: "2000.00"},
                    {year: "2012", totalPaid: "1998.99"}
                ]
            }
        ]
    })
})

it('Orders nested data reverse by Payout only for correct listing', () => {
    let viewModel = {
        overallStatsByYearAndByListing: [
            {
                name: "listing1",
                years: [
                    {year: "2010", totalPaid: "2000.00"},
                    {year: "2011", totalPaid: "1999.99"},
                    {year: "2012", totalPaid: "1998.99"}
                ]
            },
            {
                name: "listing2",
                years: [
                    {year: "2010", totalPaid: "1999.99"},
                    {year: "2011", totalPaid: "2000.00"},
                    {year: "2012", totalPaid: "1998.99"}
                ]
            }
        ]
    };

    let filteredData = ViewModelSorter.orderYearsBy(viewModel, 0, "totalPaid");


    expect(filteredData).toEqual({
        overallStatsByYearAndByListing: [
            {
                name: "listing1",
                years: [
                    {year: "2012", totalPaid: "1998.99"},
                    {year: "2011", totalPaid: "1999.99"},
                    {year: "2010", totalPaid: "2000.00"}
                ]
            },
            {
                name: "listing2",
                years: [
                    {year: "2010", totalPaid: "1999.99"},
                    {year: "2011", totalPaid: "2000.00"},
                    {year: "2012", totalPaid: "1998.99"}
                ]
            }
        ]
    })
})

it('Orders nested data forward by Month only for correct listing', () => {
    let viewModel = {
        overallStatsByMonthAndByListing: [
            {
                name: "listing1",
                months: [
                    {year: "2011", month: "February"},
                    {year: "2011", month: "January"},
                    {year: "2012", month: "January"}
                ]
            },
            {
                name: "listing2",
                months: [
                    {year: "2011", month: "February"},
                    {year: "2011", month: "January"},
                    {year: "2012", month: "January"}
                ]
            }
        ]
    };

    let filteredData = ViewModelSorter.orderMonthsByMonth(viewModel,0);


    expect(filteredData).toEqual({
        overallStatsByMonthAndByListing: [
            {
                name: "listing1",
                months: [
                    {year: "2012", month: "January"},
                    {year: "2011", month: "February"},
                    {year: "2011", month: "January"}
                ]
            },
            {
                name: "listing2",
                months: [
                    {year: "2011", month: "February"},
                    {year: "2011", month: "January"},
                    {year: "2012", month: "January"}
                ]
            }
        ]
    })
})

it('Orders nested data reverse by Month only for correct listing', () => {
    let viewModel = {
        overallStatsByMonthAndByListing: [
            {
                name: "listing1",
                months: [
                    {year: "2012", month: "January"},
                    {year: "2011", month: "February"},
                    {year: "2011", month: "January"}
                ]
            },
            {
                name: "listing2",
                months: [
                    {year: "2011", month: "February"},
                    {year: "2011", month: "January"},
                    {year: "2012", month: "January"}
                ]
            }
        ]
    };

    let filteredData = ViewModelSorter.orderMonthsByMonth(viewModel,0);


    expect(filteredData).toEqual({
        overallStatsByMonthAndByListing: [
            {
                name: "listing1",
                months: [
                    {year: "2011", month: "January"},
                    {year: "2011", month: "February"},
                    {year: "2012", month: "January"}
                ]
            },
            {
                name: "listing2",
                months: [
                    {year: "2011", month: "February"},
                    {year: "2011", month: "January"},
                    {year: "2012", month: "January"}
                ]
            }
        ]
    })
})