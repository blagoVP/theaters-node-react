import React from 'react';
import LinkComponent from '../link';

const Header = () => {
    return (
        <nav >
            <a>Theater</a>
            <ul>
                <li><LinkComponent href="/" title="Home"/></li>
                <li><LinkComponent href="/logout" title="Logout"/></li>
                <li><LinkComponent href="/login" title="Login"/></li>
                <li><LinkComponent href="/register" title="Register"/></li>
            </ul>
        </nav>
    )
}

export default Header;
