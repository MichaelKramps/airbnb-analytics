class DataOrderer{
    static orderChronologically(data, titleIndexes) {
        data.sort(function(a, b){
            return new Date(b[titleIndexes.startDateIndex]) - new Date(a[titleIndexes.startDateIndex]);
        });
        return data;
    }
}

export default DataOrderer;