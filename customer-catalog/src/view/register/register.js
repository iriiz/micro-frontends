import React, { useState } from 'react';

import '../../css/style.css';
import '../../css/font.css';

import MenuLateral from "../../components/MenuLateral/MenuLateral";
import ProgressBar from 'react-bootstrap/ProgressBar';
import TypePerson from '../../components/Steps/OneTypePerson/TypePerson';
import GeneralData from '../../components/Steps/TwoGeneralData/GeneralData';
import HomeAddress from '../../components/Steps/ThreeHomeAddress/HomeAddress';
import Documents from '../../components/Steps/FourDocuemts/Documents';
import Representative from '../../components/Steps/SixAddress/Representative'
import DataLegalEntity from '../../components/Steps/TwoGeneralData/DataLegalEntity';

function Register() {
    const [selectedValue, setSelectedValue] = useState('');
    const [selectedStep, setSelectedStep] = useState('1');
    const [progress, setProgress] = useState(0);

    const handleSelectChange = (value) => {
        setSelectedValue(value);
    };

    const handleStep = (value) => {
        setSelectedStep(value);
    };

    const handleProgress = () => {
        if (selectedValue == 2) {
            setProgress(progress + 25);
        } else if (selectedValue == 1) {
            setProgress(progress + 33);
        }
    }

    const handleProgressBack = () => {
        if (selectedValue == 2) {
            setProgress(progress - 25);
        } else if (selectedValue == 1) {
            setProgress(progress - 33);
        }
    }

    return (
        <div className='container-fluid container-body'>
            <div className="row">
                <div className="col-1 col-menu-lateral">
                    <MenuLateral />
                </div>
                <div className='col-11 container-body-home space-profile'>
                    <div className='hedaer-step'>
                        {selectedValue == 2 ? (
                            <>
                                <div className='progress-step'>
                                    <div className='progress-step'>
                                        <ProgressBar>
                                            <ProgressBar variant="success" now={progress} key={1} />
                                        </ProgressBar>
                                    </div>
                                    <div className='d-flex justify-content-between icons-steps'>
                                        <button className='container-icon-steps' onClick={() => handleStep('1')}>
                                            <i className="bi bi-person-fill-check icon-step"></i>
                                        </button>
                                        <button className='container-icon-steps' onClick={() => handleStep('5')}>
                                            <i className="bi bi-person-vcard-fill icon-step"></i>
                                        </button>
                                        <button className='container-icon-steps' onClick={() => handleStep('6')}>
                                            <i className="bi bi-person-fill-check icon-step"></i>
                                        </button>
                                        <button className='container-icon-steps' onClick={() => handleStep('3')}>
                                            <i className="bi bi-geo-alt-fill icon-step"></i>
                                        </button>
                                        <button className='container-icon-steps' onClick={() => handleStep('4')}>
                                            <i className="bi  bi-file-earmark-plus-fill icon-step"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <h6 className='text-h6'>Tipo de Persona</h6>
                                    <h6 className='text-h6'>Datos Generales</h6>
                                    <h6 className='text-h6'>Datos del Representante Legal</h6>
                                    <h6 className='text-h6'>Direccion de la Empresa</h6>
                                    <h6 className='text-h6'>Documentos</h6>
                                </div>
                            </>
                        ) : (
                            <>
                                <div>
                                    <div className='progress-step'>
                                        <ProgressBar>
                                            <ProgressBar variant="success" now={progress} key={1} />
                                        </ProgressBar>
                                    </div>
                                    <div className='d-flex justify-content-between icons-steps'>
                                        <button className='container-icon-steps' onClick={() => handleStep('1')}>
                                            <i className="bi bi-person-fill-check icon-step" ></i>
                                        </button>
                                        <button className='container-icon-steps' onClick={() => handleStep('2')}>
                                            <i className="bi bi-person-vcard-fill icon-step"></i>
                                        </button>
                                        <button className='container-icon-steps' onClick={() => handleStep('3')}>
                                            <i className="bi bi-geo-alt-fill icon-step"></i>
                                        </button>
                                        <button className='container-icon-steps' onClick={() => handleStep('4')}>
                                            <i className="bi  bi-file-earmark-plus-fill icon-step"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <h6 className='text-h6'>Tipo de Persona</h6>
                                    <h6 className='text-h6'>Datos Generales</h6>
                                    <h6 className='text-h6'>Direccion Particular</h6>
                                    <h6 className='text-h6'>Documentos</h6>
                                </div>
                            </>
                        )}
                    </div>
                    <div className='step-body'>
                        {(() => {
                            switch (selectedStep) {
                                case '1':
                                    return <TypePerson onSelectChange={handleSelectChange} handleStep={handleStep} selectedValue={selectedValue} handleProgress={handleProgress} />;
                                case '2':
                                    return <GeneralData handleStep={handleStep} handleProgress={handleProgress} handleProgressBack={handleProgressBack} />;
                                case '3':
                                    return <HomeAddress handleStep={handleStep} handleProgress={handleProgress} handleProgressBack={handleProgressBack} />;
                                case '4':
                                    return <Documents handleStep={handleStep} handleProgress={handleProgress} handleProgressBack={handleProgressBack} />;
                                case '5':
                                    return <DataLegalEntity handleStep={handleStep} handleProgress={handleProgress} handleProgressBack={handleProgressBack} />;
                                case '6':
                                    return <Representative handleStep={handleStep} handleProgress={handleProgress} handleProgressBack={handleProgressBack} />;
                                default:
                                    return <TypePerson onSelectChange={handleSelectChange} handleStep={handleStep} selectedValue={selectedValue} />;
                            }
                        })()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register