import TitleIndexer from "../TitleIndexer/TitleIndexer";
import DataFilterer from "../DataFilterer/DataFilterer";

class DataAnalyzer{
    constructor(data) {
        this.titleIndexes = TitleIndexer.getTitleIndexes(data[0]);
        this.data = DataFilterer.filterOutTitleRow(data);
    }

    getTotalPayout() {
        let totalPayout = 0;

        for (let i = 0; i < this.data.length; i++) {
            let thisPayout = this.data[i][this.titleIndexes.amountPaidOutIndex]
            totalPayout += parseInt(thisPayout);
        }

        return totalPayout;
    }

    getNumberOfGuests(data = this.data) {
        return data.length;
    }
}

export default DataAnalyzer;