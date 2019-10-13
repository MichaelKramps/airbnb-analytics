import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, {render, mount} from 'enzyme';
import sinon from "sinon";
import App from './App';

Enzyme.configure({adapter: new Adapter()});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('contains an upload button', () => {
  let app = render(<App />);
  let input = app.find('input[type="file"]');

  expect(input).toHaveLength(1);
})

it('changes component state when input state changes', () => {
  const event = {target: {name: "airbnb-csv-upload", value: "anything"}};
  let app = mount(<App />);

  expect(app.state("fileUploaded")).toBe(false);

  app.find('#airbnb-csv-upload').simulate('change', event);

  expect(app.state("fileUploaded")).toBe(true);
})
