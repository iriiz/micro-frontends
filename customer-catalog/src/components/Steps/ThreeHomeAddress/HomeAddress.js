import React, { useState } from 'react';
import '../Step.css';
import addressData from '../../../catalog/Addresses.csv';
import { paises } from '../../../catalog/getPais';

function HomeAddress({ handleStep, handleProgress, handleProgressBack }) {
    const [onPostalCode, setOnPostalCode] = useState(true);
    const handelStepNext = () => {
        handleStep('4');
        handleProgress();
    }

    const handelStepBack = () => {
        handleStep('2');
        handleProgressBack();
    }

    const onChangePostalCode = (e) => {
        const value = e.target.value;
        if (value.length === 5) {
            buscarCodigoPostal(value);
        }
    }

    const handleChangePais = () => {

    }

    const [postalCode, setPostalCode] = useState({
        municipio: 'Municipio o Alcaldia',
        estado: 'Estado o Entidad Federativa',
        ciudad: 'Ciudad',
        colonias: ['Seleccionar colonia']
    });

    const buscarCodigoPostal = (codigo) => {
        const data = addressData.filter(entry => entry.d_codigo === parseInt(codigo));
        if (data.length > 0) {
            const colonias = data.map(item => item.d_asenta.toUpperCase());
            setOnPostalCode(false);
            setPostalCode({
                municipio: data[0].D_mnpio.toUpperCase(),
                estado: data[0].d_estado.toUpperCase(),
                colonias: colonias
            });
        }
    }

    return (
        <div>
            <div className='container-data'>
                <div className='row '>
                    <div className="col-sm-4 space-step">
                        <label className="form-label">País</label>
                        <select className="form-select" onChange={handleChangePais}>
                            <option>Seleccionar</option>
                            {paises.map(pais => (
                                <option key={pais.codigo} value={pais.codigo}>
                                    {pais.description}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="col-sm-4 space-step">
                        <label className="form-label">Codigo Postal</label>
                        <input type="text" className="form-control" placeholder="00000" onChange={onChangePostalCode} />
                    </div>
                    <div className="col-sm-4 space-step">
                        <label className="form-label">Entidad Federativa</label>
                        <input type="text" className="form-control" value={postalCode.estado} disabled />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-sm-4 space-step">
                        <label className="form-label">Alcaldía / Municipio</label>
                        <input type="text" className="form-control" value={postalCode.municipio} disabled />
                    </div>
                    <div className="col-sm-4 space-step">
                        <label className="form-label">Colonia</label>
                        {postalCode.colonias.length === 1 ? (
                            <input type="text" className="form-control" value={postalCode.colonias} disabled />
                        ) : (
                            <select className="form-select" disabled={onPostalCode} >
                                <option> Seleccionar la colonia </option>
                                {postalCode.colonias.map(i => (
                                    <option key={i} value={i}>
                                        {i}
                                    </option>
                                ))}
                            </select>
                        )}
                    </div>
                    <div className="col-sm-4 space-step">
                        <label className="form-label">Calle Principal</label>
                        <input type="email" className="form-control" placeholder="Nombre de la Calle" />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-sm-4 space-step">
                        <label className="form-label">Número Exterior</label>
                        <input type="number" className="form-control" placeholder="#0000" />
                    </div>
                    <div className="col-sm-4 space-step">
                        <label className="form-label">Número Interior</label>
                        <input type="number" className="form-control" placeholder="#0000" />
                    </div>
                    <div className="col-sm-4 space-step"></div>
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

export default HomeAddress
