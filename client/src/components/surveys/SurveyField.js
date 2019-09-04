// survey field to render label and text field

import React, { Component } from 'react';

export default ({ input, label, meta: { error, touched } }) => { //pulls input from props ES6 syntax  input is where all eventhandlers live
    return (
        <div>
            <label style={{ fontSize: '20px' }}>{label}</label>
            <input {...input} style={{ marginBottom: '5px' }} />
            <div className="red-text" style={{ marginBottom: '20px' }}>
                {touched && error}
            </div>
        </div>
    );
};