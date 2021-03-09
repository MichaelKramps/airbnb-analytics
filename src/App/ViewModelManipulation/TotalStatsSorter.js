import OrderHelper
    from "../ViewModelBuilder/DataOrderer/OrderHelper";

class TotalStatsSorter{
    static orderByPayout(viewModel) {
        if (OrderHelper.isOrdered(viewModel.totalStatsByListing, "totalPaid")) {
            return TotalStatsSorter.reverseOrderByPayout(viewModel);
        }
        return TotalStatsSorter.forwardOrderByPayout(viewModel);
    }

    static forwardOrderByPayout(viewModel) {
        viewModel.totalStatsByListing.sort(function(a, b){
            return (b.totalPaid) - (a.totalPaid);
        })

        return viewModel;
    }

    static reverseOrderByPayout(viewModel) {
        viewModel.totalStatsByListing.sort(function(a, b){
            return (a.totalPaid) - (b.totalPaid);
        })

        return viewModel;
    }
}

export default TotalStatsSorter;