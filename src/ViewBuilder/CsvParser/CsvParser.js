class CsvParser {
    constructor() {
        this.readCsvFile.bind(this);
        this.parseCsvFile.bind(this);
    }

    readCsvFile(e, callback){
        var reader = new FileReader();
        reader.addEventListener('load', (e) => {
            let csvdata = e.target.result;
            callback(this.parseCsvFile(csvdata)); // calling function for parse csv data
        });
        let uploadButton = document.getElementById('airbnb-csv-upload');
        if(uploadButton) {
            reader.readAsBinaryString(document.getElementById('airbnb-csv-upload').files[0]);
        }
    }

    parseCsvFile(fileData) {
        let parsedata = [];

        let newLinebrk = fileData.split("\n");
        for(let i = 0; i < newLinebrk.length; i++) {
            parsedata.push(newLinebrk[i].split(","))
        }

        return parsedata;
    }
}

export default CsvParser;