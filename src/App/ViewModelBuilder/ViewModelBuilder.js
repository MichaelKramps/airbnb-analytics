import DataSplitter from "./DataSplitter/DataSplitter";
import DataAnalyzer from "./DataAnalyzer/DataAnalyzer";
import DataFilterer from "./DataFilterer/DataFilterer";
import TitleIndexer from "./TitleIndexer/TitleIndexer";

class ViewModelBuilder {
    constructor(data, titleIndexes) {
        this.data = data;
        this.titleIndexes = titleIndexes;

        this.dataSplitter = new DataSplitter(data, titleIndexes);
        this.dataAnalyzer = new DataAnalyzer(data, titleIndexes);

        this.viewModel = {};
    }

    static buildTestViewModelBuilder(data) {
        return new ViewModelBuilder(DataFilterer.filterOutTitleRow(data), TitleIndexer.getTitleIndexes(data[0]));
    }

    createViewModel() {
        this.addTotalStaysByListing();
        this.addTotalNightsByListing();
        this.addAmountPaidByListing();
        this.addAveragePricePerNightByListing();
        this.addAverageNightsPerGuestByListing();
        this.addOverallStatsSplitByYearAndByListing();
        this.addOverallStatsSplitByMonthAndByListing();
        return this.viewModel;
    }

    addTotalStaysByListing() {
        this.viewModel.totalStaysByListing = [];
        let dataSplitByListingName = this.dataSplitter.splitByListingName(this.data);

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
        let dataSplitByListingName = this.dataSplitter.splitByListingName(this.data);

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
        let dataSplitByListingName = this.dataSplitter.splitByListingName(this.data);

        for (let i = 0; i < dataSplitByListingName.length; i++) {
            let thisListing = {};
            let thisData = dataSplitByListingName[i];

            thisListing.name = thisData[0][this.titleIndexes.listingNameIndex];

            thisListing.amountPaid = this.dataAnalyzer.getAmountPaid(thisData).toFixed(2);

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

    addAverageNightsPerGuestByListing() {
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

    addOverallStatsSplitByYearAndByListing() {
        this.viewModel.overallStatsByYearAndByListing = [];

        let dataSplitByListingName = this.dataSplitter.splitByListingName(this.data);

        for (let i = 0; i < dataSplitByListingName.length; i++) {
            let thisListing = {};
            let thisData = dataSplitByListingName[i];

            thisListing.name = thisData[0][this.titleIndexes.listingNameIndex];
            thisListing.years = [];

            let dataSplitByYear = this.dataSplitter.splitByYear(thisData);

            for (let j = 0; j < dataSplitByYear.length; j++) {
                let thisYearsData = dataSplitByYear[j];
                let thisYear = {};

                thisYear.year = new Date(dataSplitByYear[j][0][this.titleIndexes.startDateIndex]).getFullYear();
                thisYear.amountPaid = this.dataAnalyzer.getAmountPaid(thisYearsData).toFixed(2);
                thisYear.totalNights = this.dataAnalyzer.getNumberOfNights(thisYearsData);
                thisYear.totalStays = this.dataAnalyzer.getNumberOfGuests(thisYearsData);
                thisYear.averageNightsPerGuest = (thisYear.totalNights / thisYear.totalStays).toFixed(2);
                thisYear.averagePricePerNight = (thisYear.amountPaid / thisYear.totalNights).toFixed(2);

                thisListing.years.push(thisYear);
            }

            this.viewModel.overallStatsByYearAndByListing.push(thisListing);
        }
    }

    addOverallStatsSplitByMonthAndByListing() {
        this.viewModel.overallStatsByMonthAndByListing = [];

        let dataSplitByListingName = this.dataSplitter.splitByListingName(this.data);

        for (let i = 0; i < dataSplitByListingName.length; i++) {
            let thisListing = {};
            let thisData = dataSplitByListingName[i];

            thisListing.name = thisData[0][this.titleIndexes.listingNameIndex];
            thisListing.months = [];

            let dataSplitByMonth = this.dataSplitter.splitByMonth(thisData);

            for (let j = 0; j < dataSplitByMonth.length; j++) {
                let thisYearsData = dataSplitByMonth[j];
                let thisYear = {};

                thisYear.year = new Date(dataSplitByMonth[j][0][this.titleIndexes.startDateIndex]).getFullYear();
                const monthNames = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"
                ];
                thisYear.month = monthNames[new Date(dataSplitByMonth[j][0][this.titleIndexes.startDateIndex]).getMonth()];
                thisYear.amountPaid = this.dataAnalyzer.getAmountPaid(thisYearsData).toFixed(2);
                thisYear.totalNights = this.dataAnalyzer.getNumberOfNights(thisYearsData);
                thisYear.totalStays = this.dataAnalyzer.getNumberOfGuests(thisYearsData);
                thisYear.averageNightsPerGuest = (thisYear.totalNights / thisYear.totalStays).toFixed(2);
                thisYear.averagePricePerNight = (thisYear.amountPaid / thisYear.totalNights).toFixed(2);

                thisListing.months.push(thisYear);
            }

            this.viewModel.overallStatsByMonthAndByListing.push(thisListing);
        }
    }
}

export default ViewModelBuilder;