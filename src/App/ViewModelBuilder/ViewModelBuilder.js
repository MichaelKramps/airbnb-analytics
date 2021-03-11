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
        this.addTotalStatsByListing();
        this.addOverallStatsSplitByYearAndByListing();
        this.addOverallStatsSplitByMonthAndByListing();
        return this.viewModel;
    }

    addTotalStatsByListing() {
        this.viewModel.totalStatsByListing = [];
        let dataSplitByListingName = this.dataSplitter.splitByListingName(this.data);

        for (let i = 0; i < dataSplitByListingName.length; i++) {
            let thisListing = {};
            let thisListingsData = dataSplitByListingName[i];

            thisListing.name = thisListingsData[0][this.titleIndexes.listingNameIndex];
            thisListing.totalStays = this.dataAnalyzer.getNumberOfGuests(thisListingsData);
            thisListing.totalNights = this.dataAnalyzer.getNumberOfNights(thisListingsData);
            thisListing.averageNightsPerGuest = (thisListing.totalNights / thisListing.totalStays).toFixed(2);
            thisListing.totalPaid = this.dataAnalyzer.getAmountPaid(thisListingsData).toFixed(2);
            thisListing.averagePricePerNight = (thisListing.totalPaid / thisListing.totalNights).toFixed(2);

            this.viewModel.totalStatsByListing.push(thisListing);
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
            let totalPaid = 0;
            let totalNights = 0;
            let totalStays = 0;
            let totalAverageNightsPerGuest = 0;
            let totalAveragePricePerNight = 0;

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

                totalPaid += parseFloat(thisYear.amountPaid);
                totalNights += thisYear.totalNights;
                totalStays += thisYear.totalStays;
                totalAverageNightsPerGuest += parseFloat(thisYear.averageNightsPerGuest);
                totalAveragePricePerNight += parseFloat(thisYear.averagePricePerNight);

                thisListing.years.push(thisYear);
            }

            thisListing.averagePaid = (totalPaid / thisListing.years.length).toFixed(2);
            thisListing.averageNights = (totalNights / thisListing.years.length).toFixed(2);
            thisListing.averageStays = (totalStays / thisListing.years.length).toFixed(2);
            thisListing.averageNightsPerGuest = (totalAverageNightsPerGuest / thisListing.years.length).toFixed(2);
            thisListing.averagePricePerNight = (totalAveragePricePerNight / thisListing.years.length).toFixed(2);

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
            let totalPaid = 0;
            let totalNights = 0;
            let totalStays = 0;
            let totalAverageNightsPerGuest = 0;
            let totalAveragePricePerNight = 0;

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

                totalPaid += parseFloat(thisYear.amountPaid);
                totalNights += thisYear.totalNights;
                totalStays += thisYear.totalStays;
                totalAverageNightsPerGuest += parseFloat(thisYear.averageNightsPerGuest);
                totalAveragePricePerNight += parseFloat(thisYear.averagePricePerNight);

                thisListing.months.push(thisYear);
            }

            thisListing.averagePaid = (totalPaid / thisListing.months.length).toFixed(2);
            thisListing.averageNights = (totalNights / thisListing.months.length).toFixed(2);
            thisListing.averageStays = (totalStays / thisListing.months.length).toFixed(2);
            thisListing.averageNightsPerGuest = (totalAverageNightsPerGuest / thisListing.months.length).toFixed(2);
            thisListing.averagePricePerNight = (totalAveragePricePerNight / thisListing.months.length).toFixed(2);

            this.viewModel.overallStatsByMonthAndByListing.push(thisListing);
        }
    }
}

export default ViewModelBuilder;