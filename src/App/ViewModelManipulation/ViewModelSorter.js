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

    static orderMonthsBy(viewModel, dataGroupingIndex, orderBy) {
        let listingGroup = viewModel.overallStatsByMonthAndByListing[dataGroupingIndex];
        let arrayToOrder = listingGroup.months;
        if (OrderHelper.isOrdered(arrayToOrder, orderBy)) {
            arrayToOrder = ViewModelSorter.reverseOrderBy(arrayToOrder, orderBy);
        } else {
            arrayToOrder = ViewModelSorter.forwardOrderBy(arrayToOrder, orderBy);
        }
        return viewModel;
    }

    static orderMonthsByMonth(viewModel, dataGroupingIndex) {
        let orderBy = "month";
        let listingGroup = viewModel.overallStatsByMonthAndByListing[dataGroupingIndex];
        let arrayToOrder = listingGroup.months;
        if (OrderHelper.isDateOrdered(arrayToOrder, orderBy)) {
            arrayToOrder = ViewModelSorter.reverseOrderDateBy(arrayToOrder);
        } else {
            arrayToOrder = ViewModelSorter.forwardOrderDateBy(arrayToOrder);
        }
        return viewModel;
    }

    static forwardOrderDateBy(toOrder) {
        toOrder.sort(function(a, b){
            let date1 = new Date();
            date1.setFullYear(a.year);
            date1.setMonth(OrderHelper.setMonthFrom(a.month));

            let date2 = new Date();
            date2.setFullYear(b.year);
            date2.setMonth(OrderHelper.setMonthFrom(b.month));

            return (date2 - date1);
        })

        return toOrder;
    }

    static reverseOrderDateBy(toOrder) {
        toOrder.sort(function(a, b){
            let date1 = new Date();
            date1.setFullYear(a.year);
            date1.setMonth(OrderHelper.setMonthFrom(a.month));

            let date2 = new Date();
            date2.setFullYear(b.year);
            date2.setMonth(OrderHelper.setMonthFrom(b.month));

            return (date1 - date2);
        })

        return toOrder;
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

    static orderYearlyStatsByYear(viewModel, dataGroupIndex) {
        return ViewModelSorter.orderYearsBy(viewModel, dataGroupIndex, "year");
    }

    static orderYearlyStatsByPayout(viewModel, dataGroupIndex) {
        return ViewModelSorter.orderYearsBy(viewModel, dataGroupIndex, "amountPaid");
    }

    static orderYearlyStatsByStays(viewModel, dataGroupIndex) {
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

    static orderMonthlyStatsByMonth(viewModel, dataGroupIndex) {
        return ViewModelSorter.orderMonthsByMonth(viewModel, dataGroupIndex);
    }

    static orderMonthlyStatsByPayout(viewModel, dataGroupIndex) {
        return ViewModelSorter.orderMonthsBy(viewModel, dataGroupIndex, "amountPaid");
    }

    static orderMonthlyStatsByStays(viewModel, dataGroupIndex) {
        return ViewModelSorter.orderMonthsBy(viewModel, dataGroupIndex, "totalStays");
    }

    static orderMonthlyStatsByNights(viewModel, dataGroupIndex) {
        return ViewModelSorter.orderMonthsBy(viewModel, dataGroupIndex, "totalNights");
    }

    static orderMonthlyStatsByNightsPerBooking(viewModel, dataGroupIndex) {
        return ViewModelSorter.orderMonthsBy(viewModel, dataGroupIndex, "averageNightsPerGuest");
    }

    static orderMonthlyStatsByPricePerNight(viewModel, dataGroupIndex) {
        return ViewModelSorter.orderMonthsBy(viewModel, dataGroupIndex, "averagePricePerNight");
    }
}

export default ViewModelSorter;