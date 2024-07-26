import React, { useState } from 'react';
import Address from './Address';
import RepresentativeData from './RepresentativeData';
import '../Step.css';

function Representative({ handleStep, handleProgress, handleProgressBack }) {
    const [isSelectAddress, setSelectAddress] = useState(false);

    const handleClicAddress = () => {
        setSelectAddress(true);
    }

    const handleClicGuardar = () => {
        setSelectAddress(false);
    }

    const handelStepNext = () => {
        handleStep('3');
        handleProgress();
    }

    const handelStepBack = () => {
        handleStep('5');
        handleProgressBack();
    }

    return (
        <div>
            <div className='container-data'>
                {isSelectAddress ? (
                    <Address handel={handleClicGuardar} handelStepNext={handelStepNext} handelStepBack={handelStepBack} />
                ) : (
                    <RepresentativeData handel={handleClicAddress} handelStepNext={handelStepNext} handelStepBack={handelStepBack} />
                )}
            </div>
        </div>
    )
}

export default Representative
