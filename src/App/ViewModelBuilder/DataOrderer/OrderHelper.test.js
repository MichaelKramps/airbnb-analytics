import OrderHelper from "./OrderHelper";

it('Orders forward by Payout the first time', () => {
    let viewModel = {
        totalStatsByListing: [
            {name: "listing 1", totalPaid: "1999.99"},
            {name: "listing 2", totalPaid: "2000.00"},
            {name: "listing 3", totalPaid: "1998.99"}
        ]
    };

    let isOrdered = OrderHelper.isOrdered(viewModel.totalStatsByListing, "totalPaid");


    expect(isOrdered).toEqual(false);
})

it('Orders reverse by Payout if already ordered', () => {
    let viewModel = {
        totalStatsByListing: [
            {name: "listing 2", totalPaid: "2000.00"},
            {name: "listing 1", totalPaid: "1999.99"},
            {name: "listing 3", totalPaid: "1998.99"}
        ]
    };

    let isOrdered = OrderHelper.isOrdered(viewModel.totalStatsByListing, "totalPaid");


    expect(isOrdered).toEqual(true);
})