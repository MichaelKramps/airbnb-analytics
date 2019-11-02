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
}

export default DataFilterer;