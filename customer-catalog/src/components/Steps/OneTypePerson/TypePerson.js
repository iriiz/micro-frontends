import React, { useState } from 'react';
import '../Step.css';

function TypePerson({ onSelectChange, handleStep, selectedValue, handleProgress }) {
    const [isSelect, setSelect] = useState(false);
    const handleChange = (event) => {
        onSelectChange(event.target.value);
        setSelect(false);
    };

    const handelStepNext = () => {
        handleProgress();
        if (selectedValue == 2) {
            handleStep('5');
        } else if (selectedValue == 1) {
            handleStep('2');
        } else {
            setSelect(true);
        }
    }

    return (

        <div className='containerAccordion'>
            <div className='container-data'>
                <div className="row">
                    <div className='col-sm-4 sin-space'>
                        <label className="form-label space-select">Seleccionar el tipo de Persona: </label>
                    </div>
                    <div className='col-sm-8 sin-space'>
                        <select className={isSelect ? ('form-select error') : ('form-select')} onChange={handleChange} required>
                            <option>Selecciona</option>
                            <option value="1">Persona Fisica</option>
                            <option value="2">Persona Moral</option>
                        </select>
                    </div>
                </div>
                {isSelect && (
                    <div className="row">
                        <div className='col-sm-4 sin-space'>

                        </div>
                        <div className='col-sm-8 sin-space error'>
                            Es necesario seleccionar el tipo de persona
                        </div>
                    </div>
                )}
                <hr />
                <div className='row'>
                    <div className="col-sm-8"></div>
                    <div className="col-sm-4">
                        <div className="d-grid gap-2">
                            <button className="btn btn-primary txt-button" type="button" onClick={handelStepNext}>Continuar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TypePerson
