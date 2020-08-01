import React from 'react';

const Link = ({title, href}) => {

    return (
        <a href={href}>{title}</a>
    )
}

export default Link;