import React, { Component } from 'react'
import Info from '../info'
import Compare from '../../utils/compare'

const PlaysGuest = ({plays}) => {

    plays.sort(Compare.compareLikes).splice(3)

    const renderPlays = () => {
        
        return plays.map((play, index) => {

            return (
                <div key={play._id}>
                    <div className="home-image">
                        <img src={play.imageUrl}
                            alt="Card image cap" width="400" />
                    </div>
                    <div className="info">
                        <h4>{play.title}</h4>
                    </div>
                </div>
            )
        })

    }

    return (
        <main>

            <Info />
            <section>
                <h1>Best Rated Plays</h1>
                <div className="theaters-container">
                    {renderPlays()}
                    {/* <!-- <h4>No plays yet...</h4> --> */}
                </div>
            </section>
        </main>
    )

}

export default PlaysGuest