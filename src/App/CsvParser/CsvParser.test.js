import ReactDOM from "react-dom";
import App from "../App";
import CsvParser from "./CsvParser";

let csvParser = new CsvParser();

it('each csv row returned as an array', () => {
    let fileData = "abc,def,ghi\njkl,mno,pqr\nstu,vwx,yz";
    let result = csvParser.parseCsvFile(fileData);
    expect(result).toEqual(
        [
            ["abc", "def", "ghi"],
            ["jkl", "mno", "pqr"],
            ["stu", "vwx", "yz"]
        ]
    );
});

it('letters are lower cased', () => {
    let fileData = "aBc,Def,ghi\nJKL,mnO,PqR\nsTU,VWx,Yz";
    let result = csvParser.parseCsvFile(fileData);
    expect(result).toEqual(
        [
            ["abc", "def", "ghi"],
            ["jkl", "mno", "pqr"],
            ["stu", "vwx", "yz"]
        ]
    );
});

