import React, { useState, useContext } from 'react'
import PageLayout from '../../page-layout'
import Input from '../../input'
import SubmitBtn from '../../button-submit'
import authenticate from '../../../utils/authenticate'
import UserContext from '../../../Context'

const Login = (props) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const context = useContext(UserContext)

    const handleUsername = (event) => {

        setUsername(event.target.value) 
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        //validationa if username and password are empty, don't send request
        console.log(context)
        await authenticate('http://localhost:9999/api/user/login', {
            username,
            password
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
                    <h2>Login</h2>
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
                        onChange={(e) =>  handlePassword(e)}
                        type="password"
                    />
                    <SubmitBtn title="Login" />
                </form>
            </PageLayout >
        )
    }


export default Login