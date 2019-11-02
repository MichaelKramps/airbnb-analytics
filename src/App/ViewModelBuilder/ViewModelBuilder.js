import DataSplitter from "./DataSplitter/DataSplitter";
import DataAnalyzer from "./DataAnalyzer/DataAnalyzer";
import TitleIndexer from "./TitleIndexer/TitleIndexer";
import DataFilterer from "./DataFilterer/DataFilterer";

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
        this.addTotalNightsByListing()
        return this.viewModel;
    }

    addTotalStaysByListing() {
        this.viewModel.totalStaysByListing = [];
        let filterBlankNames = DataFilterer.filterOutBlankListings(DataFilterer.filterOutTitleRow(this.data), this.titleIndexes);
        let filterPayouts = DataFilterer.filterOutPayouts(filterBlankNames, this.titleIndexes)
        let dataSplitByListingName = this.dataSplitter.splitByListingName(filterPayouts);

        for (let i = 0; i < dataSplitByListingName.length; i++) {
            let thisListing = {};
            let thisData = dataSplitByListingName[i];

            thisListing.name = thisData[0][this.titleIndexes.listingNameIndex];

            thisListing.totalStays = this.dataAnalyzer.getNumberOfGuests(thisData);

            this.viewModel.totalStaysByListing.push(thisListing);
        }
    }

    addTotalNightsByListing() {
        this.viewModel.totalNightsByListing = [];
        let filterBlankNames = DataFilterer.filterOutBlankListings(DataFilterer.filterOutTitleRow(this.data), this.titleIndexes);
        let filterPayouts = DataFilterer.filterOutPayouts(filterBlankNames, this.titleIndexes)
        let dataSplitByListingName = this.dataSplitter.splitByListingName(filterPayouts);

        for (let i = 0; i < dataSplitByListingName.length; i++) {
            let thisListing = {};
            let thisData = dataSplitByListingName[i];

            thisListing.name = thisData[0][this.titleIndexes.listingNameIndex];

            thisListing.totalNights = this.dataAnalyzer.getNumberOfNights(thisData);

            this.viewModel.totalNightsByListing.push(thisListing);
        }
    }
}

export default ViewModelBuilder;