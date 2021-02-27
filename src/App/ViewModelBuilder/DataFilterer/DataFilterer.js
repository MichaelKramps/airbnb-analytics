class DataFilterer{
    static filterOutTitleRow(data){
        let firstRow = data[0]
        let titleRegex = /\d+/;
        for(let i = 0; i < firstRow.length; i++){
            if (titleRegex.test(firstRow[i])){
                return data;
            }
        }
        return data.slice(1);
    }

    static filterOutPayouts(data, titleIndexes) {
        let filteredData = [];
        for(let i = 0; i < data.length; i++){
            let thisRow = data[i];
            let thisType = thisRow[titleIndexes.rowTypeIndex];
            if (thisType !== 'payout'){
                filteredData.push(thisRow);
            }
        }
        return filteredData;
    }

    static filterOutBlankListings(data, titleIndexes) {
        let filteredData = [];
        for(let i = 0; i < data.length; i++){
            let thisRow = data[i];
            let thisListingName = thisRow[titleIndexes.listingNameIndex];
            let listingNameRegex = /^\s*$/;
            if (thisListingName !== null && thisListingName !== undefined && !listingNameRegex.test(thisListingName)){
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
}

export default DataFilterer;