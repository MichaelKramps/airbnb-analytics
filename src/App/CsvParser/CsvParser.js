import TitleIndexer from "../ViewModelBuilder/TitleIndexer/TitleIndexer";

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

    parseCsvFile(fileDataArray) {
        let combinedLinesOfAllFiles = [];

        for(let i = 0; i < fileDataArray.length; i++) {
            let thisFile = fileDataArray[i];
            let filteredFileDataArray = this.createFilteredArrayFromFile(thisFile);
            let fileDataArrayWithOrderedIndex = this.createProperlyIndexedArray(filteredFileDataArray);
            combinedLinesOfAllFiles = combinedLinesOfAllFiles.concat(fileDataArrayWithOrderedIndex);
        }

        return combinedLinesOfAllFiles;
    }

    createFilteredArrayFromFile(thisFile) {
        let lines = thisFile.split("\n");
        let unorderedArray = [];

        for(let i = 0; i < lines.length; i++) {
            let line = lines[i];
            let filterOutDoubleQuotes = line.replace(/"([^" ]+),([^" ]+)"/, "$1$2");
            let filterOutCommasInPayouts = filterOutDoubleQuotes.replace(/(\$?\d+),(\d+)?,?(\d+)(\.\d{2})/, "$1$2$3$4");
            unorderedArray.push(filterOutCommasInPayouts.split(","));
        }

        return unorderedArray;
    }

    createProperlyIndexedArray(filteredFileDataArray) {
        let titleIndexes = TitleIndexer.getTitleIndexes(filteredFileDataArray[0]);
        let orderedArray = [];

        for (let line = 1; line < filteredFileDataArray.length; line++) {//doesn't loop over title row
            let thisLine = filteredFileDataArray[line];
            let thisOrderedArrayLine = [];

            thisOrderedArrayLine[TitleIndexer.staticIndexes.startDateIndex] = this.createOrderedArrayEntry(thisLine, titleIndexes.startDateIndex, false, true);
            thisOrderedArrayLine[TitleIndexer.staticIndexes.endDateIndex] = this.createOrderedArrayEntry(thisLine, titleIndexes.endDateIndex, false, true);
            thisOrderedArrayLine[TitleIndexer.staticIndexes.bookDateIndex] = this.createOrderedArrayEntry(thisLine, titleIndexes.bookDateIndex, false, true);
            thisOrderedArrayLine[TitleIndexer.staticIndexes.paymentDateIndex] = this.createOrderedArrayEntry(thisLine, titleIndexes.paymentDateIndex, false, true);
            thisOrderedArrayLine[TitleIndexer.staticIndexes.statusIndex] = this.createOrderedArrayEntry(thisLine, titleIndexes.statusIndex, false, false);
            thisOrderedArrayLine[TitleIndexer.staticIndexes.numberNightsIndex] = this.createOrderedArrayEntry(thisLine, titleIndexes.numberNightsIndex, true, false);
            thisOrderedArrayLine[TitleIndexer.staticIndexes.rowTypeIndex] = this.createOrderedArrayEntry(thisLine, titleIndexes.rowTypeIndex, false, false);
            thisOrderedArrayLine[TitleIndexer.staticIndexes.listingNameIndex] = this.createOrderedArrayEntry(thisLine, titleIndexes.listingNameIndex, false, false);
            thisOrderedArrayLine[TitleIndexer.staticIndexes.amountPaidIndex] = this.createOrderedArrayEntry(thisLine, titleIndexes.amountPaidIndex, true, false);
            thisOrderedArrayLine[TitleIndexer.staticIndexes.paidOutIndex] = this.createOrderedArrayEntry(thisLine, titleIndexes.paidOutIndex, true, false);
            thisOrderedArrayLine[TitleIndexer.staticIndexes.hostFeeIndex] = this.createOrderedArrayEntry(thisLine, titleIndexes.hostFeeIndex, true, false);
            thisOrderedArrayLine[TitleIndexer.staticIndexes.cleaningFeeIndex] = this.createOrderedArrayEntry(thisLine, titleIndexes.cleaningFeeIndex, true, false);
            thisOrderedArrayLine[TitleIndexer.staticIndexes.confirmationCodeIndex] = this.createOrderedArrayEntry(thisLine, titleIndexes.confirmationCodeIndex, false, false);

            orderedArray[line - 1] = thisOrderedArrayLine;
        }
        return orderedArray;
    }

    createOrderedArrayEntry(thisLine, titleIndex, isNumeric, isDate) {
        if(thisLine[titleIndex]){
            return thisLine[titleIndex];
        } else {
            if (isNumeric) {
                return 0;
            } else if (isDate) {
                return "1900-01-01";
            } else {
                return "";
            }
        }
    }
}

export default CsvParser;