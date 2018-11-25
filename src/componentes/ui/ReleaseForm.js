import React from 'react';

const ReleaseForm = ({submitHandler}) => {
    let _releaseName, _releaseDate;



    const handleSubmit = (e) => {
        submitHandler(e, {
            name: _releaseName.value,
            date: _releaseDate.value}
        );
        clearForm();
    }

    const clearForm = () => {
        _releaseDate.value = '';
        _releaseName.value = '';
    }



    return (




        <form onSubmit={handleSubmit} className="form-inline">

            <label className="sr-only" htmlFor="inlineFormInput">Release Name</label>
            <div class="form-group">
                <input type="text" ref={input => _releaseName = input} className="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" placeholder="Task" />

            </div>


            <label className="sr-only" htmlFor="inlineFormInputGroup">Release Date</label>
            <div className="input-group mb-2 mr-sm-2 mb-sm-0">

                <div>
                    <input type="date" ref={input => _releaseDate = input} className="form-control" id="inlineFormInputGroup" placeholder="Date" />

                </div>
            </div>
            <div>
                <div>
                    <button type="submit" className="btn btn-success">Salve</button>
                    <a  type="button"  href="/Releases" className="btn btn-danger"><b>Voltar</b></a>
                </div>

            </div>
            <div>
            </div>
        </form>
    )
};

export default ReleaseForm;