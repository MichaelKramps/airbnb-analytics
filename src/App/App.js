import React from 'react';
import './App.css';
import CsvParser from '../ViewBuilder/CsvParser/CsvParser';

class App extends React.Component {
  // The contents of the csv can be stored in the state
  // Should be able to update values (or add to historical data) and see new analytics quite easily
  constructor(props) {
    super(props);
    this.state = {
      fileUploaded: false
      // state should basically mirror the view model
    };
  }

  fileUploadHandler(e) {

    console.log(CsvParser.readCsvFile(e));


    this.setState({
      fileUploaded: true
    });
  }

  // static parseCsvFile(fileData) {
  //   let parsedata = [];
  //
  //   let newLinebrk = fileData.split("\n");
  //   for(let i = 0; i < newLinebrk.length; i++) {
  //     parsedata.push(newLinebrk[i].split(","))
  //   }
  //
  //   console.log(parsedata);
  // }

  render() {
    return(
      <div>
        <label>Upload a csv: </label>
        <input type="file" name="airbnb-csv-upload" id="airbnb-csv-upload" onChange={(e) => this.fileUploadHandler(e)}/>
        <p>{this.state.counter}</p>
      </div>
    )
  };
}

export default App;
