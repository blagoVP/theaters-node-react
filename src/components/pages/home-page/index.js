import React, { Component } from 'react';
import PageLayout from '../../page-layout';
import PlaysGuest from '../../plays-guest';
import PlaysUser from '../../plays-user';
import UserContext from '../../../Context'

class HomePage extends Component {

  constructor(props){
    super(props)

    this.state = {
      plays: []
    }
  }

static contextType = UserContext

  componentDidMount(){
    console.log(this.context)
    fetch('http://localhost:9999/api/home/').then((res) =>{
      res.json().then((data)=>{
        const plays = data.slice(0, 3)//this should be removed, after api get fixed
        this.setState({
          plays
        })   
        console.log(this.state.plays) 
      })
    })
  }

  render() {
    const {
      loggedIn,
      user
    } = this.context
    if (loggedIn){
      return (
        <div>
          <PageLayout>
            <PlaysUser />
          </PageLayout>
        </div>
      )
    } else {
        return (
      <div>
        <PageLayout>
          <PlaysGuest />
        </PageLayout>
      </div>
    )
    }
  }
}

export default HomePage;
