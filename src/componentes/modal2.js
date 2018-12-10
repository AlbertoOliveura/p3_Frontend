import React from 'react';
import Modal from 'react-modal';
import LoginPage from './ui/User.js';



const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};


class App2 extends React.Component {
    constructor() {
        super();


        this.state = {
            modalIsOpen: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    };


    handleSubmit(e, {name, date}) {
        e.preventDefault();
        var state = this.state;
        var myRelease = {
            id: state.releases.length + 1,
            releaseName: name,
            releaseDate: date
        }
        this.setState({releases: state.releases.concat(myRelease)});
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#50a1ff';
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }



    render() {
        return (
            <div>


                <a  onClick={this.openModal} className="btn btn-primary"><b>+</b></a>

                <Modal

                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal" >

                    <h2 ref={subtitle => this.subtitle = subtitle}>Adicione Task</h2>
                    <LoginPage/>

                </Modal>
            </div>
        );
    }
}




export default App2;
