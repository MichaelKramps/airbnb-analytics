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

    static orderYearsBy(viewModel, dataGroupingIndex, orderBy) {
        let listingGroup = viewModel.overallStatsByYearAndByListing[dataGroupingIndex];
        let arrayToOrder = listingGroup.years;
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

    static orderYearlyStatsByPayout(viewModel, dataGroupIndex) {
        return ViewModelSorter.orderYearsBy(viewModel, dataGroupIndex, "amountPaid");
    }

    static orderYearlyTotalStatsByStays(viewModel, dataGroupIndex) {
        return ViewModelSorter.orderYearsBy(viewModel, dataGroupIndex, "totalStays");
    }

    static orderYearlyStatsByNights(viewModel, dataGroupIndex) {
        return ViewModelSorter.orderYearsBy(viewModel, dataGroupIndex, "totalNights");
    }

    static orderYearlyStatsByNightsPerBooking(viewModel, dataGroupIndex) {
        return ViewModelSorter.orderYearsBy(viewModel, dataGroupIndex, "averageNightsPerGuest");
    }

    static orderYearlyStatsByPricePerNight(viewModel, dataGroupIndex) {
        return ViewModelSorter.orderYearsBy(viewModel, dataGroupIndex, "averagePricePerNight");
    }
}

export default ViewModelSorter;