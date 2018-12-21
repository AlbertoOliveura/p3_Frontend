
import React, { Component } from "react";
class Contador extends Component {
    state = { contador: this.props.text };
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
    tratarIncremento = () => {
        this.setState({ contador: this.state.contador + 1 });
    };
}
export default Contador;