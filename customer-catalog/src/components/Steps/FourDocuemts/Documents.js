import React from 'react';

function Documents({ handleStep, handleProgress, handleProgressBack }) {
    const handelStepNext = () => {
        handleStep('1');
        handleProgress();
    }

    const handelStepBack = () => {
        handleStep('3');
        handleProgressBack();
    }
    return (
        <div>
            <div className='container-data'>
                <div className="mb-3 space-step">
                    <label htmlFor="formFile" className="form-label">Identificación Oficial</label>
                    <input className="form-control" type="file" id="formFile" />
                </div>
                <div className="mb-3 space-step">
                    <label htmlFor="formFile" className="form-label">Constancia de la Clave Única de Registro de Población</label>
                    <input className="form-control" type="file" id="formFile" />
                </div>
                <div className="mb-3 space-step">
                    <label htmlFor="formFile" className="form-label">Comprobante de Domicilio Particular</label>
                    <input className="form-control" type="file" id="formFile" />
                </div>
                <div className="mb-3 space-step">
                    <label htmlFor="formFile" className="form-label">Declaración de la Persona Física</label>
                    <input className="form-control" type="file" id="formFile" />
                </div>
            </div>
            <hr />
            <div className='row'>
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                    <div className="d-grid gap-2">
                        <button className="btn btn-secondary txt-button" type="button" onClick={handelStepBack} >Atras</button>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="d-grid gap-2">
                        <button className="btn btn-primary txt-button" type="button" onClick={handelStepNext} >Continuar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Documents
