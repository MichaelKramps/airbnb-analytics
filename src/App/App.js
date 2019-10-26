import React from 'react';
import './App.css';
import CsvParser from './CsvParser/CsvParser';
import ViewModelBuilder from './ViewModelBuilder/ViewModelBuilder';

class App extends React.Component {
  // The contents of the csv can be stored in the state
  // Should be able to update values (or add to historical data) and see new analytics quite easily
  constructor(props) {
    super(props);
    this.state = {
      fileUploaded: false
      // state should basically mirror the view model
      // or at least provide the data necessary to build the view model
    };
    this.csvParser = new CsvParser();
    this.viewBuilder = new ViewModelBuilder();
    this.fileUploadHandler = this.fileUploadHandler.bind(this);
  }

  fileUploadHandler(e) {
    this.csvParser.readCsvFile(e, (data) => {
      this.setState(this.viewBuilder.createViewModel(data));
      console.log(this.state)
    });
  }

  render() {
    return(
      <div>
        <label>Upload a csv: </label>
        <input type="file" name="airbnb-csv-upload" id="airbnb-csv-upload" onChange={(e) => this.fileUploadHandler(e)}/>
        <div>
          <span>Booked 24 hours before start date: </span>{this.state.oneDayBefore}
        </div>
        <div>
          <span>Booked 1 week before start date: </span>{this.state.oneWeekBefore}
        </div>
        <div>
          <span>Booked 1 month before start date: </span>{this.state.oneMonthBefore}
        </div>
        <div>
          <span>Booked more than 1 month before start date: </span>{this.state.moreThanOneMonthBefore}
        </div>
      </div>
    )
  };
}

export default App;
