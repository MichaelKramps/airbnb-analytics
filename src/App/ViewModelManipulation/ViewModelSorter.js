import OrderHelper
    from "../ViewModelBuilder/DataOrderer/OrderHelper";

class ViewModelSorter{
    static orderBy(viewModel, toOrder, orderBy) {
        let arrayToOrder = viewModel[toOrder];
        if (OrderHelper.isOrdered(arrayToOrder, orderBy)) {
            arrayToOrder = ViewModelSorter.reverseOrderBy(arrayToOrder, orderBy);
        } else {
            arrayToOrder = ViewModelSorter.forwardOrderBy(arrayToOrder, orderBy);
        }
        return viewModel;
    }

    static forwardOrderBy(toOrder, orderBy) {
        toOrder.sort(function(a, b){
            return (b[orderBy]) - (a[orderBy]);
        })

        return toOrder;
    }

    static reverseOrderBy(toOrder, orderBy) {
        toOrder.sort(function(a, b){
            return (a[orderBy]) - (b[orderBy]);
        })

        return toOrder;
    }

    static orderTotalStatsByPayout(viewModel) {
        return ViewModelSorter.orderBy(viewModel, "totalStatsByListing", "totalPaid");
    }

    static orderTotalStatsByStays(viewModel) {
        return ViewModelSorter.orderBy(viewModel, "totalStatsByListing", "totalStays");
    }

    static orderTotalStatsByNights(viewModel) {
        return ViewModelSorter.orderBy(viewModel, "totalStatsByListing", "totalNights");
    }

    static orderTotalStatsByNightsPerBooking(viewModel) {
        return ViewModelSorter.orderBy(viewModel, "totalStatsByListing", "averageNightsPerGuest");
    }

    static orderTotalStatsByPricePerNight(viewModel) {
        return ViewModelSorter.orderBy(viewModel, "totalStatsByListing", "averagePricePerNight");
    }
}

export default ViewModelSorter;