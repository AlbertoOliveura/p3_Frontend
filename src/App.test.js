import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ReleaseForm from "./componentes/ui/ReleaseForm";
import Route from "./componentes/Releases.js";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
    ReactDOM.render(<ReleaseForm />, div);
    ReactDOM.render(<Route />, div);

    ReactDOM.unmountComponentAtNode(div);


});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.render(<ReleaseForm />, div);
    ReactDOM.render(<Route />, div);

    ReactDOM.unmountComponentAtNode(div);


});
