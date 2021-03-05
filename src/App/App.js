import React from 'react';
import './App.css';
import CsvParser from './CsvParser/CsvParser';
import ViewModelBuilder from './ViewModelBuilder/ViewModelBuilder';
import AnalyticsView from './AnalyticsView/AnalyticsView';
import DataFilterer from "./ViewModelBuilder/DataFilterer/DataFilterer";
import TitleIndexer from "./ViewModelBuilder/TitleIndexer/TitleIndexer";
import DataOrderer from "./ViewModelBuilder/DataOrderer/DataOrderer";

class App extends React.Component {
  // The contents of the csv can be stored in the state
  // Should be able to update values (or add to historical data) and see new analytics quite easily
  constructor(props) {
    super(props);
    this.state = {
      fileUploaded: false,
      data: [],
      staticIndexes: {},
      viewModel: {},
      // state should basically mirror the view model
      // or at least provide the data necessary to build the view model
    };
    this.csvParser = new CsvParser();
    this.fileUploadHandler = this.fileUploadHandler.bind(this);
  }

  fileUploadHandler(e) {
      this.state.fileUploaded = true;
      this.csvParser.readCsvFiles(e, (data) => {
          let treatedData = this.treatData(data, TitleIndexer.staticIndexes);
          this.state.data = treatedData;
          let viewBuilder = new ViewModelBuilder(treatedData, TitleIndexer.staticIndexes);
          this.state.viewModel = viewBuilder.createViewModel();
          this.setState(this.state.viewModel);
      });
  }

  treatData(data, titleIndexes) {
      let lowerCasedData = DataFilterer.lowerCaseData(data, titleIndexes);
      let filteredData = DataFilterer.filterOutAllEmptyData(this.state.data.concat(lowerCasedData), titleIndexes);
      let orderedData = DataOrderer.orderChronologically(filteredData, titleIndexes);
      return orderedData;
  }

  render() {
      if (this.state.fileUploaded){
          return(
              <div>
                  <label>Upload your Airbnb csv files: </label>
                  <input type="file" name="airbnb-csv-upload" id="airbnb-csv-upload"
                         accept=".csv" multiple
                         onChange={(e) => this.fileUploadHandler(e)}/>
                  <AnalyticsView {...this.state} />
              </div>
          )
      } else {
          return (
              <div>
                  <label>Upload your Airbnb csv files: </label>
                  <input type="file" name="airbnb-csv-upload" id="airbnb-csv-upload"
                         accept=".csv" multiple
                         onChange={(e) => this.fileUploadHandler(e)}/>
              </div>
          )
      }
  };
}

export default App;
