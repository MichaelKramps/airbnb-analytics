import DataSplitter from "./DataSplitter/DataSplitter";
import DataAnalyzer from "./DataAnalyzer/DataAnalyzer";
import TitleIndexer from "./TitleIndexer/TitleIndexer";
import DataFilterer from "./DataFilterer/DataFilterer";

var DateDiff = require('date-diff');

class ViewModelBuilder {
    constructor(data) {
        this.data = data;
        this.titleIndexes = TitleIndexer.getTitleIndexes(data[0]);

        this.dataSplitter = new DataSplitter(data);
        this.dataAnalyzer = new DataAnalyzer(data);

        this.viewModel = {};
    }

    createViewModel() {
        this.addTotalStaysByListing();
        return this.viewModel;
    }

    addTotalStaysByListing() {
        this.viewModel.totalStaysByListing = [];
        let filterPayouts = DataFilterer.filterOutPayouts(this.data, this.titleIndexes);
        let dataSplitByListingName = this.dataSplitter.splitByListingName(filterPayouts);

        for (let i = 0; i < dataSplitByListingName.length; i++) {
            let thisListing = {};
            let thisData = dataSplitByListingName[i];

            thisListing.name = thisData[0][this.titleIndexes.listingNameIndex];

            thisListing.totalStays = this.dataAnalyzer.getNumberOfGuests(thisData);

            this.viewModel.totalStaysByListing.push(thisListing);
        }
    }
}

export default ViewModelBuilder;