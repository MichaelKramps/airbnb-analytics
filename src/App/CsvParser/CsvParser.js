class CsvParser {
    constructor() {
        this.readCsvFiles.bind(this);
        this.parseCsvFile.bind(this);
    }

    readCsvFiles(e, callback){
        let readers = [];
        let uploadButton = document.getElementById('airbnb-csv-upload');

        for(let i = 0;i < uploadButton.files.length;i++){
            readers.push(this.readSingleFile(uploadButton.files[i]));
        }

        Promise.all(readers).then((values) => {
            callback(this.parseCsvFile(values));
        });
    }

    parseCsvFile(fileDataArray) {
        let combinedRawLines = [];
        for(let i = 0; i < fileDataArray.length; i++) {
            let thisFile = fileDataArray[i];
            let lines = thisFile.split("\n");
            combinedRawLines = combinedRawLines.concat(lines);
        }

        let filteredData = [];
        for(let i = 0; i < combinedRawLines.length; i++) {
            let line = combinedRawLines[i];
            let filterOutDoubleQuotes = line.replace(/"([^" ]+),([^" ]+)"/, "$1$2");
            filteredData.push(filterOutDoubleQuotes.split(","))
        }

        return filteredData;
    }

    readSingleFile(file){
        return new Promise(function(resolve,reject){
            let fr = new FileReader();

            fr.onload = function(){
                resolve(fr.result);
            };

            fr.onerror = function(){
                reject(fr);
            };

            fr.readAsText(file);
        });
    }
}

export default CsvParser;