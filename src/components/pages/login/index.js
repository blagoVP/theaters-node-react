import React, { Component } from 'react'
import PageLayout from '../page-layout'
import Input from '../input'
import SubmitBtn from '../button-submit'

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
        }
    }

    render() {

        const {
            username,
            password,
        } = this.state

        return (
            <PageLayout >
                <form>
                    <h2>Login</h2>
                    <Input
                        label="Username"
                        id="username"
                        value={username}
                        onChange={() => { }}
                        type="text"
                    />
                    <Input
                        label="Password"
                        id="password"
                        value={password}
                        onChange={() => { }}
                        type="password"
                    />
                    <SubmitBtn title="Login"/>
                </form>
            </PageLayout >
        )
    }
}

export default Login