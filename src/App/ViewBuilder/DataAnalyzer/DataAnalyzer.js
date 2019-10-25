import TitleIndexer from "../TitleIndexer/TitleIndexer";

class DataAnalyzer{
    constructor(data) {
        this.data = data;
        this.titleIndexes = TitleIndexer.getTitleIndexes(data[0]);
    }

    getTotalPayout() {
        let totalPayout = 0;

        for (let i = 1; i < this.data.length; i++) {
            let thisPayout = this.data[i][this.titleIndexes.amountPaidOutIndex]
            totalPayout += parseInt(thisPayout);
        }

        return totalPayout;
    }
}

export default DataAnalyzer;