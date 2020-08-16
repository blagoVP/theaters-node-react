import React, { Component } from 'react'
import PageLayout from '../../page-layout'
import Input from '../../input'
import SubmitBtn from '../../button-submit'
import authenticate from '../../../utils/authenticate'
import UserContext from '../../../Context'

class Register extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            repeatPassword: ""
        }
    }

    static contextType = UserContext

    handleChange = (event, type) => {
        const newState = {}
        newState[type] = event.target.value

        this.setState(newState)
    }

    handleSubmit = async (event) => {
        event.preventDefault()

        const {
            username,
            password,
            repeatPassword
        } = this.state

        //validation if empty and if passwords match!!!

        await authenticate('http://localhost:9999/api/user/register', {
            username,
            password,
            rePassword: repeatPassword
        }, (user) => {
            this.context.logIn(user)
            this.props.history.push('/')
        }, (e) => {
            console.log('ERROR', e)
        })
    }

    render() {

        const {
            username,
            password,
            repeatPassword
        } = this.state

        return (
            <PageLayout >
                <form onSubmit={this.handleSubmit}>
                    <h2>Register</h2>
                    <Input
                        label="Username"
                        id="username"
                        value={username}
                        onChange={(e) => this.handleChange(e, 'username')}
                        type="text"
                    />
                    <Input
                        label="Password"
                        id="password"
                        value={password}
                        onChange={(e) => this.handleChange(e, 'password')}
                        type="password"
                    />
                    <Input
                        label="Repeat Password"
                        id="repeatPassword"
                        value={repeatPassword}
                        onChange={(e) => this.handleChange(e, 'repeatPassword')}
                        type="password"
                    />
                    <SubmitBtn title="Register" />
                </form>
            </PageLayout >
        )
    }
}

export default Register