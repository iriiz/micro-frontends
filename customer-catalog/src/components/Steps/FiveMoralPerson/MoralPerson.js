import React from 'react';

function MoralPerson() {
    return (
        <div className='containerAccordion'>
            <div className='container-data'>
                <div className='row space-step'>
                    <div className="col-sm-4">
                        <label className="form-label">Nombre (s)</label>
                        <input type="text" className="form-control" placeholder="Escribir nombre sin abreviaturas" />
                    </div>
                    <div className="col-sm-4">
                        <label className="form-label">Apellido Paterno</label>
                        <input type="text" className="form-control" placeholder="Escribir apellido sin abreviaturas" />
                    </div>
                    <div className="col-sm-4 sin-space">
                        <label className="form-label">Apellido Materno</label>
                        <input type="text" className="form-control" placeholder="Escribir apellido sin abreviaturas" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoralPerson
