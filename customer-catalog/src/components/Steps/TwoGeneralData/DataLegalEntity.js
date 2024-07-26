import React from 'react';
import { paises } from '../../../catalog/getPais';

function DataLegalEntity({ handleStep, handleProgress, handleProgressBack }) {
    const handelStepNext = () => {
        handleStep('6');
        handleProgress();
    }

    const handelStepBack = () => {
        handleStep('1');
        handleProgressBack();
    }
    return (
        <div className='container-data'>
            <div className='row'>
                <div className="col-sm-6 space-step">
                    <label className="form-label">Denominación o razón social</label>
                    <input type="email" className="form-control" placeholder="Denominación o razón social" />
                </div>
                <div className="col-sm-6 space-step">
                    <label className="form-label">Giro mercantil</label>
                    <input type="text" className="form-control" placeholder="actividad u objeto social" />
                </div>
            </div>
            <div className='row'>
                <div className="col-sm-6 space-step">
                    <label className="form-label">Nacionalidad o País</label>
                    <select className="form-select" aria-label="Default select example">
                        <option>Seleccionar</option>
                        {paises.map(pais => (
                            <option key={pais.codigo} value={pais.codigo}>
                                {pais.description}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-sm-6 space-step">
                    <label className="form-label">Número de Firma Electrónica</label>
                    <input type="number" className="form-control" placeholder="actividad u objeto social" />
                </div>
            </div>
            <div className='row'>
                <div className="col-sm-4 space-step">
                    <label className="form-label">Fecha de constitución</label>
                    <input type="date" className="form-control" />
                </div>
                <div className="col-sm-4 space-step">
                    <label className="form-label">Número de Teléfono</label>
                    <input type="phone" className="form-control" placeholder="Escribir el numero de telefono" />
                </div>
                <div className="col-sm-4 space-step">
                    <label className="form-label">Correo Electronico</label>
                    <input type="email" className="form-control" placeholder="ejemplo@gmail.com" />
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

export default DataLegalEntity
