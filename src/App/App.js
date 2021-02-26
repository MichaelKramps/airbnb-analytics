import React from 'react';
import './App.css';
import CsvParser from './CsvParser/CsvParser';
import ViewModelBuilder from './ViewModelBuilder/ViewModelBuilder';
import AnalyticsView from './AnalyticsView/AnalyticsView';
import DataFilterer from "./ViewModelBuilder/DataFilterer/DataFilterer";
import TitleIndexer from "./ViewModelBuilder/TitleIndexer/TitleIndexer";

class App extends React.Component {
  // The contents of the csv can be stored in the state
  // Should be able to update values (or add to historical data) and see new analytics quite easily
  constructor(props) {
    super(props);
    this.state = {
      fileUploaded: false,
      data: [],
      viewModel: {},
      // state should basically mirror the view model
      // or at least provide the data necessary to build the view model
    };
    this.csvParser = new CsvParser();
    this.fileUploadHandler = this.fileUploadHandler.bind(this);
  }

  fileUploadHandler(e) {
      this.state.fileUploaded = true;
      this.csvParser.readCsvFile(e, (data) => {
          let combinedData = DataFilterer.filterOutDuplicates(this.state.data.concat(data), TitleIndexer.getTitleIndexes(data[0]));
          console.log(combinedData)
          this.state.data = combinedData;
          let viewBuilder = new ViewModelBuilder(combinedData);
          this.state.viewModel = viewBuilder.createViewModel();
          this.setState(this.state.viewModel);
      });
  }

  render() {
      if (this.state.fileUploaded){
          return(
              <div>
                  <label>Upload a csv: </label>
                  <input type="file" name="airbnb-csv-upload" id="airbnb-csv-upload"
                         onChange={(e) => this.fileUploadHandler(e)}/>
                  <AnalyticsView {...this.state} />
              </div>
          )
      } else {
          return (
              <div>
                  <label>Upload a csv: </label>
                  <input type="file" name="airbnb-csv-upload" id="airbnb-csv-upload"
                         onChange={(e) => this.fileUploadHandler(e)}/>
              </div>
          )
      }
  };
}

export default App;
