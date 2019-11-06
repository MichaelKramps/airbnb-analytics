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
        this.addTotalNightsByListing();
        this.addAmountPaidByListing();
        this.addAveragePricePerNightByListing();
        this.addAverageNightsPerGuesByListing();
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

    addAmountPaidByListing() {
        this.viewModel.amountPaidByListing = [];
        let filterBlankNames = DataFilterer.filterOutBlankListings(DataFilterer.filterOutTitleRow(this.data), this.titleIndexes);
        let filterPayouts = DataFilterer.filterOutPayouts(filterBlankNames, this.titleIndexes)
        let dataSplitByListingName = this.dataSplitter.splitByListingName(filterPayouts);

        for (let i = 0; i < dataSplitByListingName.length; i++) {
            let thisListing = {};
            let thisData = dataSplitByListingName[i];

            thisListing.name = thisData[0][this.titleIndexes.listingNameIndex];

            thisListing.amountPaid = this.dataAnalyzer.getAmoundPaid(thisData);

            this.viewModel.amountPaidByListing.push(thisListing);
        }
    }

    addAveragePricePerNightByListing() {
        this.viewModel.averagePricePerNightByListing = [];

        for (let i = 0; i < this.viewModel.amountPaidByListing.length; i++) {
            let thisListing = {};

            thisListing.name = this.viewModel.amountPaidByListing[i].name;

            let amountPaid = this.viewModel.amountPaidByListing[i].amountPaid;
            let numberNights = this.viewModel.totalNightsByListing[i].totalNights;

            thisListing.averagePricePerNight = (parseInt(amountPaid)/parseInt(numberNights)).toFixed(2);

            this.viewModel.averagePricePerNightByListing.push(thisListing);
        }
    }

    addAverageNightsPerGuesByListing() {
        this.viewModel.averageNightsPerGuestByListing = [];

        for (let i = 0; i < this.viewModel.totalNightsByListing.length; i++) {
            let thisListing = {};

            thisListing.name = this.viewModel.totalNightsByListing[i].name;

            let numberNights = this.viewModel.totalNightsByListing[i].totalNights;
            let numberGuests = this.viewModel.totalStaysByListing[i].totalStays;

            thisListing.averageNightsPerGuest = (parseInt(numberNights)/parseInt(numberGuests)).toFixed(2);

            this.viewModel.averageNightsPerGuestByListing.push(thisListing);
        }
    }
}

export default ViewModelBuilder;