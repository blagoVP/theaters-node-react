import React, { useState, useContext } from 'react'
import PageLayout from '../../page-layout'
import Input from '../../input'
import SubmitBtn from '../../button-submit'
import authenticate from '../../../utils/authenticate'
import UserContext from '../../../Context'
import ErrorNotifications from '../../notifications'

const Register = (props) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [repeatPassword, setRepeatPassword] = useState("")
    const [message, setMessage] = useState(null)

    const context = useContext(UserContext)

    const handleUsername = (event) => {
        setUsername(event.target.value) 
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleRePassword = (event) => {
        setRepeatPassword(event.target.value)
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

        if (password !== repeatPassword) {
            setMessage("Password don't match")
            return
        }

        await authenticate('http://localhost:9999/api/user/register', {
            username,
            password,
            rePassword: repeatPassword
        }, (user) => {
            context.logIn(user)
            props.history.push('/')
        }, (e) => {
            setMessage(`${username} already exist`)
            console.log('ERROR', e)
        })
    }

        return (
            <PageLayout >
                 { message ? <ErrorNotifications message={message} /> : null}
                <form onSubmit={handleSubmit}>
                    <h2>Register</h2>
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
                        onChange={(e) => handlePassword(e)}
                        type="password"
                        styleClass="on-dark"
                    />
                    <Input
                        label="Repeat Password"
                        id="repeatPassword"
                        value={repeatPassword}
                        onChange={(e) => handleRePassword(e)}
                        type="password"
                        styleClass="on-dark"
                    />
                    <SubmitBtn title="Register" />
                </form>
            </PageLayout >
        )
    }

export default Register