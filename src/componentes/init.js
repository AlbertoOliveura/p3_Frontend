import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

import MainNav from "./MainNav";

class Init extends Component {
    render() {
        return (
            <div>

                    <MainNav  />
                <div className="card bg-dark text-white">
                    <img  width="100%" src={require('../img/images.jpg')}  />

                </div>




            </div>

        );
    }
}

export default Init;