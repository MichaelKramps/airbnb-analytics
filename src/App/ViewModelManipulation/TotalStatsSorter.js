class TotalStatsSorter{
    static orderByPayout(viewModel) {
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