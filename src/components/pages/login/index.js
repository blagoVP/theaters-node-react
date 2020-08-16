import React, { Component } from 'react'
import PageLayout from '../../page-layout'
import Input from '../../input'
import SubmitBtn from '../../button-submit'
import authenticate from '../../../utils/authenticate'
import UserContext from '../../../Context'

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
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
            password
        } = this.state

        //validationa if username and password are empty, don't send request
        console.log(this.context)
        await authenticate('http://localhost:9999/api/user/login', {
            username,
            password
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
        } = this.state

        return (
            <PageLayout >
                <form onSubmit={this.handleSubmit}>
                    <h2>Login</h2>
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
                    <SubmitBtn title="Login" />
                </form>
            </PageLayout >
        )
    }
}

export default Login