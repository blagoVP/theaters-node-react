import React from 'react';

const TextArea = ({ label, id, value, onChange }) => {
    return (
        <div>
            <label htmlFor={id}>{label}:</label>
            <textarea placeholder="Description" value={value} onChange={onChange} ></textarea>
        </div>
    )
}

export default TextArea