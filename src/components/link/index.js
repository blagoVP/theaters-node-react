import React from 'react'
import {
    BrowserRouter, 
    Link
} from 'react-router-dom'

const LinkComponent = ({title, href, styleClass}) => {

    return (
        <Link className={styleClass} to={href}>{title}</Link>
    )
}

export default LinkComponent;