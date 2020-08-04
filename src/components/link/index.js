import React from 'react'
import {
    BrowserRouter, 
    Link
} from 'react-router-dom'

const LinkComponent = ({title, href}) => {

    return (
        <Link to={href}>{title}</Link>
    )
}

export default LinkComponent;