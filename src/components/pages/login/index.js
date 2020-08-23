import React, { useState, useContext } from 'react'
import PageLayout from '../../page-layout'
import Input from '../../input'
import SubmitBtn from '../../button-submit'
import authenticate from '../../../utils/authenticate'
import UserContext from '../../../Context'
import ErrorNotifications from '../../notifications'

const Login = (props) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState(null)

    const context = useContext(UserContext)

    const handleUsername = (event) => {

        setUsername(event.target.value) 
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!username || username.length <= 2) {
            setMessage('username is required and must be more than 2 chars')
            return
        }

        if (!password || password.length <= 3){
            setMessage('password is required and must be more than 3 chars')
            return
        }

        console.log(context)
        await authenticate('http://localhost:9999/api/user/login', {
            username,
            password
        }, (user) => {
            context.logIn(user)
            props.history.push('/')
        }, (e) => {
            setMessage('Invalid username or password')
            console.log('ERROR', e)
        })
    }

        return (
            <PageLayout >
                 { message ? <ErrorNotifications message={message} /> : null}
                <form onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    <Input
                        label="Username"
                        id="username"
                        value={username}
                        onChange={(e) => handleUsername(e)}
                        type="text"
                        styleClass="on-dark"
                    />
                    <Input
                        label="Password"
                        id="password"
                        value={password}
                        onChange={(e) =>  handlePassword(e)}
                        type="password"
                        styleClass="on-dark"
                    />
                    <SubmitBtn title="Login" />
                </form>
            </PageLayout >
        )
    }


export default Login