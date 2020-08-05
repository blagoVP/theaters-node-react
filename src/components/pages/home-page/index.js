import React, { Component } from 'react';
import PageLayout from '../../page-layout';
import PlaysGuest from '../../plays-guest';
import PlaysUser from '../../plays-user';

class HomePage extends Component {

  constructor(props){
    super(props)

    this.state = {
      plays: []
    }
  }



  componentDidMount(){
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
    return (
      <div>
        <PageLayout>
          <PlaysGuest />
        </PageLayout>
      </div>
    )
  }
}

export default HomePage;
