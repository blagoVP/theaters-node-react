import React, { Component } from 'react';
import Info from '../info';
import LinkComponent from '../link';

const PlaysUser = (props) => {

    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         plays: []
    //     }
    // };

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
                            <a className="btn details" href="">Details</a>
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
                            <LinkComponent styleClass="btn create-play" href="#" title="Create Theater" />
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