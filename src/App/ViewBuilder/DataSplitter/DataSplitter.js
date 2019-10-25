import TitleIndexer from "../TitleIndexer/TitleIndexer";

class DataSplitter {
    constructor(data) {
        this.data = data;
        this.titleIndexes = TitleIndexer.getTitleIndexes(data[0]);
    }

    splitByStartDate(splitDate) {
        let splitData = {
            beforeDate: [],
            afterDate: []
        };

        for (let i = 1; i < this.data.length; i++) {
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

    splitByListingName() {
        let splitData = [];

        for (let i = 1; i < this.data.length; i++) {
            let thisRow = this.data[i];
            let thisListingName = thisRow[this.titleIndexes.listingNameIndex];
            let foundMatchingListingName = false;
            for (let j = 0; j < splitData.length; j++) {
                let thisListing = splitData[j]; // array of data rows with the same listing name
                if (thisListing[0][this.titleIndexes.listingNameIndex] === thisListingName){
                    thisListing.push(thisRow);
                    foundMatchingListingName = true;
                }
            }
            if (!foundMatchingListingName) {
                let newListingName = [];
                newListingName.push(thisRow);
                splitData.push(newListingName);
            }
        }

        return splitData;
    }
}

export default DataSplitter;