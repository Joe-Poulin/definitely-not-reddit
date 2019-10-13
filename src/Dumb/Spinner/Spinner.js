import React from 'react';
import loader from '../../assets/loader.gif';
import './Spinner.css';

const spinner = (props) => {

    return (
        <div className="Spinner">
            <img src={loader} alt="" height="42px"/>
        </div>
    )
};

export default spinner;