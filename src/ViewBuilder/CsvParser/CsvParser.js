class CsvParser {
    static readCsvFile(e){
        var reader = new FileReader();
        reader.addEventListener('load', function (e) {
            let csvdata = e.target.result;
            return CsvParser.parseCsvFile(csvdata); // calling function for parse csv data
        });
        reader.readAsBinaryString(document.getElementById('airbnb-csv-upload').files[0]);
    }

    static parseCsvFile(fileData) {
        let parsedata = [];

        let newLinebrk = fileData.split("\n");
        for(let i = 0; i < newLinebrk.length; i++) {
            parsedata.push(newLinebrk[i].split(","))
        }

        return parsedata;
    }
}

export default CsvParser;