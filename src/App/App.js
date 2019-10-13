import React from 'react';
import './App.css';

class App extends React.Component {
  // The contents of the csv can be stored in the state
  // Should be able to update values (or add to historical data) and see new analytics quite easily
  constructor(props) {
    super(props);
    this.state = {fileUploaded: false};
  }

  fileUploadHandler(state) {
    this.setState({
      fileUploaded: true
    });
  }

  render() {
    return(
      <div>
        <label>Upload a csv: </label>
        <input type="file" name="airbnb-csv-upload" id="airbnb-csv-upload" onChange={() => this.fileUploadHandler(this.state)}/>
        <p>{this.state.counter}</p>
      </div>
    )
  };
}

export default App;
