import React from 'react';
import logo from '../logo.svg';
import './App.css';

function App() {
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
