import TotalStatsSorter from "./TotalStatsSorter";

it('Orders by Payout', () => {
    let viewModel = {
        totalStatsByListing: [
            {name: "listing 1", totalPaid: "1999.99"},
            {name: "listing 2", totalPaid: "2000.00"},
            {name: "listing 3", totalPaid: "1998.99"}
        ]
    };

    let filteredData = TotalStatsSorter.forwardOrderByPayout(viewModel);


    expect(filteredData).toEqual({
        totalStatsByListing: [
            {name: "listing 2", totalPaid: "2000.00"},
            {name: "listing 1", totalPaid: "1999.99"},
            {name: "listing 3", totalPaid: "1998.99"}
        ]
    })
})

it('Reverse orders by Payout', () => {
    let viewModel = {
        totalStatsByListing: [
            {name: "listing 1", totalPaid: "1999.99"},
            {name: "listing 2", totalPaid: "2000.00"},
            {name: "listing 3", totalPaid: "1998.99"}
        ]
    };

    let filteredData = TotalStatsSorter.reverseOrderByPayout(viewModel);


    expect(filteredData).toEqual({
        totalStatsByListing: [
            {name: "listing 3", totalPaid: "1998.99"},
            {name: "listing 1", totalPaid: "1999.99"},
            {name: "listing 2", totalPaid: "2000.00"}
        ]
    })
})

it('Orders forward by Payout the first time', () => {
    let viewModel = {
        totalStatsByListing: [
            {name: "listing 1", totalPaid: "1999.99"},
            {name: "listing 2", totalPaid: "2000.00"},
            {name: "listing 3", totalPaid: "1998.99"}
        ]
    };

    let filteredData = TotalStatsSorter.orderByPayout(viewModel);


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

    let filteredData = TotalStatsSorter.orderByPayout(viewModel);


    expect(filteredData).toEqual({
        totalStatsByListing: [
            {name: "listing 3", totalPaid: "1998.99"},
            {name: "listing 1", totalPaid: "1999.99"},
            {name: "listing 2", totalPaid: "2000.00"}
        ]
    })
})