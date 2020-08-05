import React, { Component } from 'react'
import PageLayout from '../../page-layout'
import Input from '../../input'
import SubmitBtn from '../../button-submit'

class Register extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            repeatPassword: ""
        }
    }

    render() {

        const {
            username,
            password,
            repeatPassword
        } = this.state

        return (
            <PageLayout >
                <form>
                    <h2>Register</h2>
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
                    <Input
                        label="Repeat Password"
                        id="repeatPassword"
                        value={repeatPassword}
                        onChange={() => { }}
                        type="password"
                    />
                     <SubmitBtn title="Register"/>
                </form>
            </PageLayout >
        )
    }
}

export default Register