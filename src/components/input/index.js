import React from 'react';

const Input = ({ label, id, value, onChange, type, styleClass}) => {
    return (
        <div className={styleClass}>
            <label htmlFor={id}>{label}:</label>
            <input type={type} value={value} onChange={onChange} ></input>
            {/* if condition for the placeholder */}
        </div>
    )
}

export default Input