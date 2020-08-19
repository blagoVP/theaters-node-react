import React, { useState, useContext } from 'react'
import PageLayout from '../../page-layout'
import Input from '../../input'
import SubmitBtn from '../../button-submit'
import authenticate from '../../../utils/authenticate'
import UserContext from '../../../Context'

const Register = (props) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [repeatPassword, setRepeatPassword] = useState("")

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

        //validation if empty and if passwords match!!!

        await authenticate('http://localhost:9999/api/user/register', {
            username,
            password,
            rePassword: repeatPassword
        }, (user) => {
            context.logIn(user)
            props.history.push('/')
        }, (e) => {
            console.log('ERROR', e)
        })
    }

        return (
            <PageLayout >
                <form onSubmit={handleSubmit}>
                    <h2>Register</h2>
                    <Input
                        label="Username"
                        id="username"
                        value={username}
                        onChange={(e) => handleUsername(e)}
                        type="text"
                    />
                    <Input
                        label="Password"
                        id="password"
                        value={password}
                        onChange={(e) => handlePassword(e)}
                        type="password"
                    />
                    <Input
                        label="Repeat Password"
                        id="repeatPassword"
                        value={repeatPassword}
                        onChange={(e) => handleRePassword(e)}
                        type="password"
                    />
                    <SubmitBtn title="Register" />
                </form>
            </PageLayout >
        )
    }

export default Register