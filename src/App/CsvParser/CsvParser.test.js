import ReactDOM from "react-dom";
import App from "../App";
import CsvParser from "./CsvParser";

let csvParser = new CsvParser();

it('each csv row returned as an array', () => {
    let fileData = ["abc,def,ghi\njkl,mno,pqr\nstu,vwx,yz"];
    let result = csvParser.parseCsvFile(fileData);
    expect(result).toEqual(
        [
            ["abc", "def", "ghi"],
            ["jkl", "mno", "pqr"],
            ["stu", "vwx", "yz"]
        ]
    );
});

it('handles multiple csvs', () => {
    let fileData = ["abc,def,ghi\njkl,mno,pqr\nstu,vwx,yz", "123,456,789\n234,567,890\n987,654,321"];
    let result = csvParser.parseCsvFile(fileData);
    expect(result).toEqual(
        [
            ["abc", "def", "ghi"],
            ["jkl", "mno", "pqr"],
            ["stu", "vwx", "yz"],
            ["123", "456", "789"],
            ["234", "567", "890"],
            ["987", "654", "321"]
        ]
    );
});

it('letters are lower cased', () => {
    let fileData = ["aBc,Def,ghi\nJKL,mnO,PqR\nsTU,VWx,Yz"];
    let result = csvParser.parseCsvFile(fileData);
    expect(result).toEqual(
        [
            ["abc", "def", "ghi"],
            ["jkl", "mno", "pqr"],
            ["stu", "vwx", "yz"]
        ]
    );
});

