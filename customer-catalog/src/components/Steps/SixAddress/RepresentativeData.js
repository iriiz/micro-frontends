import React from 'react';
import { paises, estados } from '../../../catalog/getPais';
import { identificacion, ocupacion } from '../../../catalog/getIdentificacion';

function RepresentativeData({ handel, handelStepNext, handelStepBack }) {
    return (
        <div>
            <div className='container-data'>
                <div className='row '>
                    <div className="col-sm-4 space-step">
                        <label className="form-label">Nombre (s)</label>
                        <input type="text" className="form-control" placeholder="Escribir nombre sin abreviaturas" />
                    </div>
                    <div className="col-sm-4 space-step">
                        <label className="form-label">Apellido Paterno</label>
                        <input type="text" className="form-control" placeholder="Escribir apellido sin abreviaturas" />
                    </div>
                    <div className="col-sm-4 space-step">
                        <label className="form-label">Apellido Materno</label>
                        <input type="text" className="form-control" placeholder="Escribir apellido sin abreviaturas" />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-sm-4 space-step">
                        <label className="form-label">Fecha de Nacimiento</label>
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
                <div className='row'>
                    <div className="col-sm-4 space-step">
                        <label className="form-label">RFC</label>
                        <input type="email" className="form-control" placeholder="Escribir el RFC" />
                    </div>
                    <div className="col-sm-4 space-step">
                        <label className="form-label">Clave Única de Registro de Población</label>
                        <input type="text" className="form-control" placeholder="Escribir Curp" />
                    </div>
                    <div className="col-sm-4 space-step">
                        <label className="form-label">Género</label>
                        <select className="form-select" aria-label="Default select example">
                            <option>Seleccionar</option>
                            <option value="1">Femenino</option>
                            <option value="2">Masculino</option>
                        </select>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-sm-4 space-step">
                        <label className="form-label">País</label>
                        <select className="form-select" aria-label="Default select example">
                            <option>Seleccionar</option>
                            {paises.map(pais => (
                                <option key={pais.codigo} value={pais.codigo}>
                                    {pais.description}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="col-sm-4 space-step">
                        <label className="form-label">Entidad de nacimiento</label>
                        <select className="form-select" aria-label="Default select example">
                            <option>Seleccionar</option>
                            {estados.map(i => (
                                <option key={i.codigo} value={i.codigo}>
                                    {i.description}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="col-sm-4 space-step">
                        <label className="form-label">Tipo de Identificación</label>
                        <select className="form-select" aria-label="Default select example">
                            <option>Seleccionar</option>
                            {identificacion.map(i => (
                                <option key={i.codigo} value={i.codigo}>
                                    {i.description}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-sm-4 space-step">
                        <label className="form-label">Número de Identificación</label>
                        <input type="number" className="form-control" placeholder="Número de identificación" />
                    </div>
                    <div className="col-sm-4 space-step">
                        <label className="form-label">Ocupación</label>
                        <select className="form-select" aria-label="Default select example">
                            <option>Seleccionar</option>
                            {ocupacion.map(i => (
                                <option key={i.codigo} value={i.codigo}>
                                    {i.description}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="col-sm-4 space-step">
                        <label className="form-label">Número de Serie de la Firma Electrónica</label>
                        <input type="text" className="form-control" placeholder="Número de serie de la firma" />
                    </div>
                </div>
            </div>
            <hr />
            <div className='row'>
                <div className="col-sm-4"> </div>
                <div className='col-sm-8'>
                    <div className='row'>
                        <div className='col-sm-4'>
                            <div className="d-grid gap-2">
                                <button className="btn btn-secondary txt-button" onClick={handelStepBack} type="button">Atras</button>
                            </div>
                        </div>
                        <div className='col-sm-4'>
                            <div className="d-grid gap-2">
                                <button className="btn btn-success txt-button" onClick={handel} type="button">Direccion</button>
                            </div>
                        </div>
                        <div className='col-sm-4'>
                            <div className="d-grid gap-2">
                                <button className="btn btn-primary txt-button" onClick={handelStepNext} type="button">Guardar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RepresentativeData
