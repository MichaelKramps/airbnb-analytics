import React from 'react';
import './App.css';
import CsvParser from './CsvParser/CsvParser';
import ViewModelBuilder from './ViewModelBuilder/ViewModelBuilder';
import AnalyticsView from './AnalyticsView/AnalyticsView';
import DataFilterer from "./ViewModelBuilder/DataFilterer/DataFilterer";
import TitleIndexer from "./ViewModelBuilder/TitleIndexer/TitleIndexer";
import DataOrderer from "./ViewModelBuilder/DataOrderer/DataOrderer";

class App extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
      fileUploaded: false,
      data: [],
      viewModel: {}
    };
    this.csvParser = new CsvParser();
    this.fileUploadHandler = this.fileUploadHandler.bind(this);
  }

  fileUploadHandler(e) {
      this.csvParser.readCsvFiles(e, (data) => {
          let treatedData = this.treatData(data);
          let viewModel = new ViewModelBuilder(treatedData, TitleIndexer.staticIndexes).createViewModel();
          this.setState({fileUploaded: true, data: treatedData, viewModel: viewModel});
      });
  }

  treatData(data) {
      let lowerCasedData = DataFilterer.lowerCaseData(data, TitleIndexer.staticIndexes);
      let filteredData = DataFilterer.filterOutAllEmptyData(this.state.data.concat(lowerCasedData), TitleIndexer.staticIndexes);
      let orderedData = DataOrderer.orderChronologically(filteredData, TitleIndexer.staticIndexes);
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
                  <AnalyticsView {...this.state.viewModel} />
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
