import React from 'react';
import logo from '../logo.svg';
import './App.css';

function App() {
  // The contents of the csv can be stored in the state
  // Should be able to update values (or add to historical data) and see new analytics quite easily
  const [state, setState] = React.useState({counter:0});

  const fileUploadHandler = event => {
    console.log("hello");
    const newCounterValue = state.counter + 1;
    setState({ counter: newCounterValue});
  };

  return (
    <div>
      <label>Upload a csv: </label>
      <input type="file" name="airbnb-csv-upload" id="airbnb-csv-upload" onChange={fileUploadHandler} />
    </div>
  );
}

export default App;
