import DataFilterer from "../DataFilterer/DataFilterer";

class DataSplitter {
    constructor(data, titleIndexes) {
        this.titleIndexes = titleIndexes;
        this.data = DataFilterer.filterOutTitleRow(data);
    }

    splitByCustomStartDate(splitDate) {
        let splitData = {
            beforeDate: [],
            afterDate: []
        };

        for (let i = 0; i < this.data.length; i++) {
            let thisRow = this.data[i];
            let thisDate = thisRow[this.titleIndexes.startDateIndex];
            if (new Date(thisDate) < new Date(splitDate)) {
                splitData.beforeDate.push(thisRow);
            } else {
                splitData.afterDate.push(thisRow);
            }
        }

        return splitData;
    }

    splitByListingName(data = this.data) {
        let splitData = [];

        for (let i = 0; i < data.length; i++) {
            let thisRow = data[i];
            let thisListingName = thisRow[this.titleIndexes.listingNameIndex];
            let foundMatchingListingName = false;
            for (let j = 0; j < splitData.length; j++) { // check existing splitData for a matching listing name
                let thisListing = splitData[j]; // this is an array of data rows all with the same listing name
                if (thisListing[0][this.titleIndexes.listingNameIndex] === thisListingName){
                    thisListing.push(thisRow);
                    foundMatchingListingName = true;
                }
            }
            if (!foundMatchingListingName) { // if we didn't find a matching listing name, make a new one
                let newListingName = [];
                newListingName.push(thisRow);
                splitData.push(newListingName);
            }
        }

        return splitData;
    }

    splitByYear(data = this.data) {
        let splitData = [];

        let dataWithThresholdsSplit = this.splitThresholds(data);

        for (let i = 0; i < dataWithThresholdsSplit.length; i++) {
            let thisRow = dataWithThresholdsSplit[i];
            let thisYear = new Date(thisRow[this.titleIndexes.startDateIndex]).getFullYear();
            let foundMatchingYear = false;
            for (let j = 0; j < splitData.length; j++) { // check existing splitData for a matching year
                let thisListing = splitData[j]; // this is an array of data rows all with the same year
                if (new Date(thisListing[0][this.titleIndexes.startDateIndex]).getFullYear() === thisYear){
                    thisListing.push(thisRow);
                    foundMatchingYear = true;
                }
            }
            if (!foundMatchingYear) { // if we didn't find a matching listing name, make a new one
                let newYear = [];
                newYear.push(thisRow);
                splitData.push(newYear);
            }
        }

        return splitData;
    }

    splitByMonth(data = this.data) {
        let splitData = [];

        let dataWithThresholdsSplit = this.splitThresholds(data)

        for (let i = 0; i < dataWithThresholdsSplit.length; i++) {
            let thisRow = dataWithThresholdsSplit[i];
            let thisYear = new Date(thisRow[this.titleIndexes.startDateIndex]).getFullYear();
            let thisMonth = new Date(thisRow[this.titleIndexes.startDateIndex]).getMonth();
            let foundMatchingMonth = false;
            for (let j = 0; j < splitData.length; j++) { // check existing splitData for a matching month
                let thisListing = splitData[j]; // this is an array of data rows all with the same month
                if ((new Date(thisListing[0][this.titleIndexes.startDateIndex]).getFullYear() === thisYear)
                    && (new Date(thisListing[0][this.titleIndexes.startDateIndex]).getMonth() === thisMonth)){
                    thisListing.push(thisRow);
                    foundMatchingMonth = true;
                }
            }
            if (!foundMatchingMonth) { // if we didn't find a matching month, make a new one
                let newMonth = [];
                newMonth.push(thisRow);
                splitData.push(newMonth);
            }
        }

        return splitData;
    }

    splitThresholds(data = this.data) {
        let splitData = [];

        for (let i = 0; i < data.length; i++){
            let thisStay = data[i];
            if (this.crossesThreshold(thisStay)){
                let splitStays = this.splitStay(thisStay);
                for(let j = 0; j < splitStays.length; j++){
                    splitData.push(splitStays[j]);
                }
            } else {
                splitData.push(thisStay);
            }
        }

        return splitData;
    }

    crossesThreshold(stay) {
        function addDays(date, days) {
            const copy = new Date(Number(date))
            copy.setDate(date.getDate() + days)
            return copy
        }

        let startDate = new Date(stay[this.titleIndexes.startDateIndex]);
        let endDate = addDays(startDate, (parseInt(stay[this.titleIndexes.numberNightsIndex]) - 1));

        if (startDate.getMonth() !== endDate.getMonth()){
            return true;
        }

        if (startDate.getFullYear() !== endDate.getFullYear()){
            return true;
        }

        return false;
    }

    splitStay(thisStay) {
        let allStays = [];
        let startDate = new Date(thisStay[this.titleIndexes.startDateIndex]);
        let lastDayOfThisMonth = new Date(thisStay[this.titleIndexes.startDateIndex]);
        lastDayOfThisMonth.setDate(1);
        lastDayOfThisMonth.setMonth(startDate.getMonth() + 1);
        lastDayOfThisMonth.setDate(0);
        let firstDayOfNextMonth = new Date(thisStay[this.titleIndexes.startDateIndex]);
        firstDayOfNextMonth.setDate(1);
        firstDayOfNextMonth.setMonth(startDate.getMonth() === 11 ? 0 : startDate.getMonth() + 1);
        firstDayOfNextMonth.setFullYear(startDate.getMonth() === 11 ? startDate.getFullYear() + 1 : startDate.getFullYear());
        let daysLeftInMonth = lastDayOfThisMonth.getDate() - startDate.getDate() + 1;
        let daysBookedInFollowingMonth = parseFloat(thisStay[this.titleIndexes.numberNightsIndex]) - daysLeftInMonth;
        let totalPaid = parseFloat(thisStay[this.titleIndexes.amountPaidIndex].replace(/\$/g, ''));
        let totalNights = parseFloat(thisStay[this.titleIndexes.numberNightsIndex]);

        //Currently doesn't handle the case where the stay crosses over two different months
        let firstSlice = thisStay.slice();
        firstSlice[this.titleIndexes.numberNightsIndex] = daysLeftInMonth.toFixed(0);
        firstSlice[this.titleIndexes.amountPaidIndex] = ((totalPaid * daysLeftInMonth) / totalNights).toFixed(2);
        let secondSlice = thisStay.slice();
        secondSlice[this.titleIndexes.startDateIndex] = ((firstDayOfNextMonth.getMonth() > 8) ? (firstDayOfNextMonth.getMonth() + 1) : ('0' + (firstDayOfNextMonth.getMonth() + 1))) + '/' + ((firstDayOfNextMonth.getDate() > 9) ? firstDayOfNextMonth.getDate() : ('0' + firstDayOfNextMonth.getDate())) + '/' + firstDayOfNextMonth.getFullYear();
        secondSlice[this.titleIndexes.numberNightsIndex] = daysBookedInFollowingMonth.toFixed(0);
        secondSlice[this.titleIndexes.amountPaidIndex] = ((totalPaid * daysBookedInFollowingMonth) / totalNights).toFixed(2);

        allStays.push(firstSlice);
        allStays.push(secondSlice);

        return allStays;
    }
}

export default DataSplitter;