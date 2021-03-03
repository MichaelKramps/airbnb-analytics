class DataFilterer{
    static filterOutAllEmptyData(data, titleIndexes) {
        let removeDuplicates = this.filterOutDuplicates(data, titleIndexes);

        let filteredData = [];

        for(let row = 0; row < removeDuplicates.length; row++){
            let thisRow = removeDuplicates[row];
            if (this.notBlankRow(thisRow[titleIndexes.listingNameIndex]) &&
                this.notTitleRow(thisRow) &&
                this.notPayoutRow(thisRow) &&
                this.notCancelled(thisRow[titleIndexes.statusIndex]))
            {
                filteredData.push(thisRow);
            }
        }

        return filteredData;
    }

    static filterOutDuplicates(data, titleIndexes) {
        let filteredData = [];
        let uniqueConfirmationCodes = [];
        for(let i = 0; i < data.length; i++){
            let thisRow = data[i];
            let thisConfirmationCode = thisRow[titleIndexes.confirmationCodeIndex];
            if (!uniqueConfirmationCodes.includes(thisConfirmationCode)){
                uniqueConfirmationCodes.push(thisConfirmationCode);
                filteredData.push(thisRow);
            }
        }
        return filteredData;
    }

    static filterOutTitleRow(data){
        let firstRow = data[0]
        if (this.notTitleRow(firstRow)){
            return data;
        }
        return data.slice(1);
    }

    static notTitleRow(row) {
        let titleRegex = /\d+/;
        for(let column = 0; column < row.length; column++){
            if (titleRegex.test(row[column])){
                return true;
            }
        }
        return false;
    }

    static filterOutPayouts(data, titleIndexes) {
        let filteredData = [];
        for(let i = 0; i < data.length; i++){
            let thisRow = data[i];
            let thisType = thisRow[titleIndexes.rowTypeIndex];
            if (this.notPayoutRow(thisType)){
                filteredData.push(thisRow);
            }
        }
        return filteredData;
    }

    static notPayoutRow(rowType) {
        if (rowType !== 'payout'){
            return true;
        }
        return false;
    }

    static filterOutBlankListings(data, titleIndexes) {
        let filteredData = [];
        for(let i = 0; i < data.length; i++){
            let thisRow = data[i];
            let thisListingName = thisRow[titleIndexes.listingNameIndex];
            if (this.notBlankRow(thisListingName)){
                filteredData.push(thisRow);
            }
        }
        return filteredData;
    }

    static notBlankRow(listingName) {
        let listingNameRegex = /^\s*$/;
        if (listingName !== null && listingName !== undefined && !listingNameRegex.test(listingName)){
            return true;
        }
        return false;
    }

    static filterOutCancellations(data, titleIndexes) {
        let filteredData = [];
        for (let i = 0; i < data.length; i++) {
            let thisRow = data[i];
            let thisStatus = thisRow[titleIndexes.statusIndex];
            if(this.notCancelled(thisStatus)){
                filteredData.push(thisRow);
            }
        }
        return filteredData;
    }

    static notCancelled(status) {
        if (status != "canceled"){
            return true;
        }
        return false;
    }
}

export default DataFilterer;