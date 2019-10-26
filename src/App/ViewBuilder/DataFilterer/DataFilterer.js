class DataFilterer{
    static filterOutTitleRow(data){
        let firstRow = data[0]
        let titleRegex = /^[a-z ]+$/;
        for(let i = 0; i < firstRow.length; i++){
            if (!titleRegex.test(firstRow[i])){
                return data;
            }
        }
        return data.slice(1);
    }
}

export default DataFilterer;