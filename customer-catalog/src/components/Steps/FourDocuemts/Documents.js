import React, { useState } from 'react';

import { documents } from '../../../catalog/getDocuments';

function Documents({ handleStep, handleProgress, handleProgressBack }) {
    const handelStepNext = () => {
        if (selectedValue === null || selectedValue === 'Seleccionar') {
            setSelect(true);
        } else {
            handleStep('1');
            handleProgress();
        }
    }

    const handelStepBack = () => {
        handleStep('3');
        handleProgressBack();
    }

    const [selectedValue, setSelectedValue] = useState(null);
    const [isSelect, setSelect] = useState(false);
    const [isDisabled, setDisabled] = useState(true);
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
        setSelect(false);
        setDisabled(false);
    };

    return (
        <div>
            <div className='container-data'>
                <div className='row'>
                    <div className="col-sm-5 space-step">
                        <label className="form-label">Seleccionar tipo de documento</label>
                        <select className={isSelect ? ('form-select error') : ('form-select')} onChange={handleChange}>
                            <option>Seleccionar</option>
                            {documents.map(doc => (
                                <option key={doc.codigo} value={doc.codigo}>
                                    {doc.description}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="col-sm-7 space-step">
                        <label className="form-label">Seleccionar documento</label>
                        <input className="form-control" type="file" id="formFile" disabled={isDisabled} />
                    </div>
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
