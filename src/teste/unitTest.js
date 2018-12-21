import React from "react";

import ReleaseForm from "../componentes/ui/ReleaseForm";


import ReactDOM from 'react-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ReleaseForm />, div);
    ReactDOM.unmountComponentAtNode(div);
});