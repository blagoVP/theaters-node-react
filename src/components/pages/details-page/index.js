import React, { useState, useContext, useEffect } from 'react'
import PageLayout from '../../page-layout'
import UserContext from '../../../Context'
import LinkComponent from '../../link'

const DetailsPage = (props) => {

  const [play, setPlay] = useState({});
  const [isAlreadyLiked, setIsAlreadyLiked] = useState(false)

  const context = useContext(UserContext)

  const {
    user
  } = context

  const isCreater = user._id === play.creator
  const id = props.match.params.id

  useEffect(() => {

    fetch(`http://localhost:9999/api/unit/details-play/${id}/?userId=${user._id}`).then((res) => {
      res.json().then((data) => {
        setPlay(data.play)
        setIsAlreadyLiked(data.alreadyLiked)

      })
    })
  }, [])

  const handleLike = () => {
    fetch(`http://localhost:9999/api/unit/like-play/${play._id}`, {
      method: "POST",
      body: JSON.stringify({
        user: user._id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(promise => promise.json().then((response) => {
      console.log(response)
      props.history.push('/')
    })).catch((err) => {
      console.log(err)
    })
  }

  const handleDelete = () => {
    console.log("Delete Delete")
    fetch(`http://localhost:9999/api/unit/delete-play/${id}`).then((res) => {
          console.log(res)
          props.history.push('/')
        }).catch((err) => console.log(err))
  }

  return (
    <PageLayout>
      <main>
        <div className="container">

          <section className="details">
            <h1>{play.title}</h1>
            <div>
              <img className="image" src={play.imageUrl} />
            </div>
          </section>

          <section className="details">
            <h3>Theater Description</h3>
            <p>{play.description}</p>
            <div className="buttons">
              {isCreater ? 
              <LinkComponent 
              styleClass="btn delete" 
              href={props.myroute} 
              title="Delete" 
              onClick={handleDelete} 
              ></LinkComponent> : null}
              {isCreater ? <LinkComponent
                styleClass="btn edit"
                href={`/edit/${play._id}`}
                title="Edit"
              ></LinkComponent> : null}
              {!isCreater && isAlreadyLiked ? 
              <span className="liked">You have already liked this play!</span> : null}
              {!isCreater && !isAlreadyLiked ? 
              <LinkComponent
                styleClass="btn like"
                href={props.myroute}
                title="Like"
                onClick={handleLike}
              ></LinkComponent> : null}
            </div>
          </section>
        </div>
      </main>
    </PageLayout>
  )
}


export default DetailsPage;
