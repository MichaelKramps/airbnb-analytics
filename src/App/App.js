import React from 'react';
import './App.css';
import CsvParser from './CsvParser/CsvParser';
import ViewModelBuilder from './ViewModelBuilder/ViewModelBuilder';
import AnalyticsView from './AnalyticsView/AnalyticsView';
import DataFilterer from "./ViewModelBuilder/DataFilterer/DataFilterer";
import TitleIndexer from "./ViewModelBuilder/TitleIndexer/TitleIndexer";
import DataOrderer from "./ViewModelBuilder/DataOrderer/DataOrderer";
import sampleData from "./SampleData";
import ViewModelSorter
    from "./ViewModelManipulation/ViewModelSorter";

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
    this.sortViewModelBy = this.sortViewModelBy.bind(this);
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

  sortViewModelBy(sortFunction, dataGroupIndex) {
      let newViewModel = sortFunction(this.state.viewModel, dataGroupIndex);
      this.setState({fileUploaded: this.state.fileUploaded, data: this.state.data, viewModel: newViewModel});
  }

  loadSampleData() {
      let data = this.csvParser.parseCsvFile(sampleData);
      let treatedData = this.treatData(data);
      let viewModel = new ViewModelBuilder(treatedData, TitleIndexer.staticIndexes).createViewModel();
      this.setState({fileUploaded: true, data: treatedData, viewModel: viewModel});
  }

  resetState() {
      this.setState({fileUploaded: false, data: [], viewModel: {}});
  }

  render() {
      if (this.state.fileUploaded){
          return(
              <div>
                  <div>
                      <button className="go-back-button" onClick={() => this.resetState()}>&lt;== Go Back</button>
                  </div>
                  <label>Upload more Airbnb csv files: </label>
                  <input type="file" name="airbnb-csv-upload" id="airbnb-csv-upload"
                         accept=".csv" multiple
                         onChange={(e) => this.fileUploadHandler(e)}/>
                  <AnalyticsView {...this.state.viewModel} sortViewModelBy={this.sortViewModelBy} />
              </div>
          )
      } else {
          return (
              <div>
                  <h1>An Airbnb Analytics Tool by <a href="https://www.unboundinvestor.com">UnboundInvestor.com</a></h1>
                  <div className="csv-upload-container">
                      <label>Upload all your Airbnb csv files to see your analytics data ==> </label>
                      <input type="file" name="airbnb-csv-upload" id="airbnb-csv-upload"
                             accept=".csv" multiple
                             onChange={(e) => this.fileUploadHandler(e)}/>
                  </div>
                  <div className="sample-button-container">
                      <label>Or see the tool in action with some sample data ==> </label>
                      <button id="sample-data-button" onClick={() => this.loadSampleData()}>Load Sample Data</button>
                  </div>
                  <h2>What is this and how do I use it?</h2>
                  <p>This tool allows Airbnb hosts to upload .csv files provided by <a href="https://www.airbnb.com/">Airbnb</a> and get useful information about their listings.</p>
                  <ul>
                      <li>See monthly, yearly and all-time statistics for each listing</li>
                      <li>See payouts, number of stays and number of guests</li>
                      <li>See average nights/guest and price/night</li>
                      <li>See payout averages for different time frames</li>
                      <li>Data for stays that start in one month and end in another are split between months*</li>
                  </ul>
                  <p>Here's a quick video showing how you can get the .csv files needed to use this tool:</p>
                  <iframe width="640" height="350" src="https://www.youtube.com/embed/5QY4nSiOop0" frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen></iframe>
              </div>
          )
      }
  };
}

export default App;
