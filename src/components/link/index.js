import React from 'react'
import {
    BrowserRouter,
    Link
} from 'react-router-dom'

const LinkComponent = ({ title, href, styleClass, onClick }) => {

    return (
        <Link className={styleClass} to={href} onClick={onClick}>{title}</Link>
    )
}

export default LinkComponent;