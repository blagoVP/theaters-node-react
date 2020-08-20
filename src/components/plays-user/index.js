import React, { Component } from 'react';
import Info from '../info';
import { Link } from 'react-router-dom'
import LinkComponent from '../link';

const PlaysUser = (props) => {

    const renderPlays = () => {
        const plays = props.plays

        return plays.map((play) => {
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
                            <LinkComponent styleClass="btn details" href="/details" title="Details" />
                            <span className="likes">{likesCounter} likes</span>
                        </div>
                    </div>
                </div>
            )
        })

    }

    return (
        <main>
            <Info />
            <section>
                <div className="aux">
                    <h1>Available Plays</h1>
                    <div className="home-buttons">
                        <LinkComponent styleClass="btn create-play" href="/create" title="Create Theater" />
                        <LinkComponent styleClass="btn create-play" title="Sort by Date" />
                        <LinkComponent styleClass="btn create-play" title="Sort by Likes" />
                    </div>
                </div>
                <div className="theaters-container">
                    {renderPlays()}
                </div>
            </section>
        </main>
    )
}

export default PlaysUser