import React, { useState, useEffect, useContext } from 'react'
import UserContext from './Context'
import getCookie from './utils/cookie'

const App = (props) => {

    const [loggedIn, setLoggedIn] = useState(null)
    const [user, setUser] = useState(null)

    const logIn = (user) => {
        setLoggedIn(true)
        setUser(user)
    }

    const logOut = () => {
        document.cookie = "x-auth-token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
        setLoggedIn(false)
        setUser(null)
    }

    useEffect(() => {
        const token = getCookie('x-auth-token')

        if (!token) {
            logOut()
            return
        }

        fetch('http://localhost:9999/api/user/verify', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': token
            }
        }).then((promise) => {
            return promise.json()
        }).then((response) => {
            if (response.status) {
                logIn(response.user)
            } else {
                logOut()
            }
        })
    })

    return (
        <UserContext.Provider value={{
            loggedIn,
            user,
            logIn,
            logOut
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default App