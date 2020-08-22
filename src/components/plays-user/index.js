import React, { useEffect, useState } from 'react';
import Info from '../info';
import { Link } from 'react-router-dom'
import LinkComponent from '../link'
import Compare from '../../utils/compare'

const PlaysUser = (props) => {

    const [plays, setPlays] = useState([])

    useEffect(() => {
        fetch('http://localhost:9999/api/home/').then((res) => {
            res.json().then((plays) => {
              setPlays(plays)
            })
          })
    }, [])

    const handleSortByLikes = () => {
        const sorted = [...plays].sort(Compare.compareLikes)
        setPlays(sorted)
    }

    const handleSortByDate = () => {
        const sorted = [...plays].sort(Compare.compareTime)
        setPlays(sorted)
    }

    return (
        <main>
            <Info />
            <section>
                <div className="aux">
                    <h1>Available Plays</h1>
                    <div className="home-buttons">
                        <LinkComponent
                            styleClass="btn create-play"
                            href="/create"
                            title="Create Theater"
                        />
                        <LinkComponent
                            styleClass="btn create-play"
                            href={props.myroute}
                            onClick={handleSortByDate}
                            title="Sort by Date"
                        />
                        <LinkComponent
                            styleClass="btn create-play"
                            href={props.myroute}
                            onClick={handleSortByLikes}
                            title="Sort by Likes"
                        />
                    </div>
                </div>
                <div className="theaters-container">
                    {plays.map((play) => {
                        const likesCounter = play.usersLiked.length
                        return (
                            <div key={play._id}>
                                <div className="home-image">
                                    <img src={play.imageUrl}
                                        alt="Card image cap" />
                                </div>
                                <div className="info">
                                    <h4>{play.title}</h4>
                                    <div className="info-buttons">
                                        <LinkComponent
                                            styleClass="btn details"
                                            href={`/details/${play._id}`}
                                            title="Details"
                                        />
                                        <span className="likes">{likesCounter} likes</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </main>
    )
}

export default PlaysUser