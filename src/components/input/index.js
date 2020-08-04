import React from 'react';

const Input = ({ label, id, value, onChange, type}) => {
    return (
        <div className="on-dark">
            <label htmlFor={id}>{label}:</label>
            <input type={type} placeholder="********" value={value} onChange={onchange} ></input>
            {/* if condition for the placeholder */}
        </div>
    )
}

export default Input