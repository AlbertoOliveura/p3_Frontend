
import React, { Component } from "react";


class Contador extends Component {
    state = { contador: 4 };
    estilos = {
        fontSize: 40,
        fontWeight: "normal"
    };
    render() {
        return (
            <React.Fragment>
        <span style={this.estilos} className="badge badge-primary m-2">
          {this.formataContador()}
        </span>

            </React.Fragment>
        );
    }
    formataContador() {
        const { contador } = this.state;
        return contador === 0 ? "Zero" : contador;
    }

}
export default Contador



