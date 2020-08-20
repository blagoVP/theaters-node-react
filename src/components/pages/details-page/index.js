import React, { useState, useContext, useEffect } from 'react';
import PageLayout from '../../page-layout';
import UserContext from '../../../Context'

const DetailsPage = () => {

  const [play, setPlay] = useState({});

  // useEffect(()=>{
  //   fetch play data on mounting
  // fetch('http://localhost:9999/api/home/').then((res) => {
  //     res.json().then((data) => {
  //       const plays = data.slice(0, 3)//this should be removed, after api get fixed
  //       setPlays(plays)
  //       console.log(plays)
  //     })
  //   })
  // }, [])

  const context = useContext(UserContext)

  const {
    loggedIn,
    user
  } = context


  return (
    <PageLayout>
      <main>
        <div className="container">

          <section className="details">
            <h1>Theater title: Who's Afraid of Virginia Woolf? by Edward Albee</h1>
            <div>
              <img className="image" src="https://media.timeout.com/images/103727744/380/285/image.jpg" />
            </div>
          </section>

          <section className="details">
            <h3>Theater Description</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, et ex. Dignissimos
            voluptatum recusandae quos. Eum beatae soluta velit voluptas hic incidunt ab dolorem ipsam
                        blanditiis laudantium. Distinctio, aliquam libero.</p>
            <div className="buttons">
              <a className="btn delete" href="">Delete</a>
              <a className="btn edit" href="">Edit</a>
              <span className="liked">You have already liked this play!</span>
              <a className="btn like" href="">Like</a>
            </div>
          </section>
        </div>
      </main>
    </PageLayout>
  )
}


export default DetailsPage;
