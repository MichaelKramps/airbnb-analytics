class CsvParser {
    constructor() {
        this.readCsvFile.bind(this);
        this.parseCsvFile.bind(this);
    }

    readCsvFile(e, callback){
        let reader = new FileReader();
        reader.addEventListener('load', (e) => {
            callback(this.parseCsvFile(e.target.result)); // calling function for parse csv data
        });
        let uploadButton = document.getElementById('airbnb-csv-upload');
        if(uploadButton) {
            reader.readAsBinaryString(document.getElementById('airbnb-csv-upload').files[0]);
        }
    }

    parseCsvFile(fileData) {
        let parseData = [];

        let newLine = fileData.toLowerCase().split("\n");
        for(let i = 0; i < newLine.length; i++) {
            parseData.push(newLine[i].split(","))
        }

        return parseData;
    }
}

export default CsvParser;