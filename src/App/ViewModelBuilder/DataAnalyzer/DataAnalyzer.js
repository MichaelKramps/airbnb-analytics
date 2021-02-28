import DataFilterer from "../DataFilterer/DataFilterer";
import TitleIndexer from "../TitleIndexer/TitleIndexer";

class DataAnalyzer{
    constructor(data, titleIndexes) {
        this.titleIndexes = titleIndexes;
        this.data = DataFilterer.filterOutTitleRow(data);
    }

    static buildTestDataAnalyzer(data) {
        return new DataAnalyzer(data, TitleIndexer.getTitleIndexes(data[0]));
    }

    getTotalPayout() {
        let totalPayout = 0;

        for (let i = 0; i < this.data.length; i++) {
            let thisPayout = this.data[i][this.titleIndexes.paidOutIndex]
            totalPayout += parseInt(thisPayout);
        }

        return totalPayout;
    }

    getNumberOfNights(data = this.data) {
        let totalNights = 0;

        for (let i = 0; i < data.length; i++) {
            totalNights += this.extractNumber((data[i][this.titleIndexes.numberNightsIndex]));
        }

        return totalNights;
    }

    getNumberOfGuests(data = this.data) {
        return data.length;
    }

    getAmountPaid(data = this.data) {
        let totalPaidOut = 0;

        for (let i = 0; i < data.length; i++) {
            totalPaidOut += this.extractNumber(data[i][this.titleIndexes.amountPaidIndex]);
        }

        return totalPaidOut;
    }

    extractNumber(amount){
        if (amount) {
            return parseFloat(amount.replace(/\$/g, ''));
        }
        return 0;
    }
}

export default DataAnalyzer;