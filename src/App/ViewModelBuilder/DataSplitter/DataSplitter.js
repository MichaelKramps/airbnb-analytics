import TitleIndexer from "../TitleIndexer/TitleIndexer";
import DataFilterer from "../DataFilterer/DataFilterer";

class DataSplitter {
    constructor(data) {
        this.titleIndexes = TitleIndexer.getTitleIndexes(data[0]);
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

    splitByListingName() {
        let splitData = [];

        for (let i = 0; i < this.data.length; i++) {
            let thisRow = this.data[i];
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
}

export default DataSplitter;