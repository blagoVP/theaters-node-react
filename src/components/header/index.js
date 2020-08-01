import React from 'react';
import Link from '../link';

const Header = () => {
    return (
        <nav >
            <a>Theater</a>
            <ul>
                <li><Link href="#" title="Home"/></li>
                <li><Link href="#" title="Logout"/></li>
                <li><Link href="#" title="Login"/></li>
                <li><Link href="#" title="Register"/></li>
            </ul>
        </nav>
    )
}

export default Header;
