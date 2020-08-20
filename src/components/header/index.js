import React, { useContext } from 'react'
import LinkComponent from '../link'
import UserContext from '../../Context'

const Header = () => {
    const context = useContext(UserContext)

    const {
        loggedIn
    } = context

    return (
        <nav >
            <a>Theater</a>
            <ul>
                <li><LinkComponent href="/" title="Home" /></li>
                {loggedIn ? <li><LinkComponent href="/logout" title="Logout" /></li> : null}
                {!loggedIn ? <li><LinkComponent href="/login" title="Login" /></li> : null}
                {!loggedIn ? <li><LinkComponent href="/register" title="Register" /></li> : null}
            </ul>
        </nav>
    )
}

export default Header;
