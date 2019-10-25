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
}

export default DataSplitter;