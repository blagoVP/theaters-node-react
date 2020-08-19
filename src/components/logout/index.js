import React, {useContext} from 'react'
import UserContext from '../../Context'

const Logout = (props) =>{
console.log('logout vliza')
const context = useContext(UserContext)
context.logOut()
props.history.push('/')
return null

}

export default Logout