import React, { Component } from 'react';
import Info from '../info';
import Link from '../link';

class PlaysUser extends Component {

    constructor(props) {
        super(props);

        this.state = {
            plays: []
        }
    };

    render() {
        return (
            <main>

                <Info />
                <section>
                <div className="aux">
                    <h1>Available Plays</h1>
                    <div className="home-buttons">
                        <Link className="btn create-play" href="#" title="Create Theater"/>
                        <Link className="btn create-play" href="#" title="Sort by Date"/>    
                        <Link className="btn create-play" href="#" title="Sort by Likes"/>           
                    </div>
                </div>
                <div className="theaters-container">
                    <div>
                        <div className="home-image">
                            <img src="https://media.timeout.com/images/103727744/380/285/image.jpg"
                                alt="Card image cap"/>
                        </div>
                        <div className="info">
                            <h4>Who's Afraid of Virginia Woolf? by Edward Albee</h4>
                            <div className="info-buttons">
                                <a className="btn details" href="">Details</a>
                                <span className="likes">5 likes</span>
                            </div>
                        </div>
                    </div>


                    <div>
                        <div className="home-image">
                            <img src="https://media.timeout.com/images/103727745/380/285/image.jpg"
                                alt="Card image cap"/>
                        </div>
                        <div className="info">
                            <h4>Death of a Salesman by Arthur Miller</h4>
                            <div className="info-buttons">
                                <a className="btn details" href="">Details</a>
                                <span className="likes">4 likes</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="home-image">
                            <img src="https://media.timeout.com/images/103727757/380/285/image.jpg"
                                alt="Card image cap"/>
                        </div>
                        <div className="info">
                            <h4>This Is Our Youth by Kenneth Lonergan</h4>
                            <div className="info-buttons">
                                <a className="btn details" href="">Details</a>
                                <span className="likes">3 likes</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="home-image">
                            <img src="https://media.timeout.com/images/103727773/380/285/image.jpg"
                                alt="Card image cap"/>
                        </div>
                        <div className="info">
                            <h4>Cloud 9 by Caryl Churchill</h4>
                            <div className="info-buttons">
                                <a className="btn details" href="">Details</a>
                                <span className="likes">6 likes</span>
                            </div>
                        </div>
                    </div>

                    {/* <!-- <h4>No plays yet...</h4> --> */}
                </div>
            </section>

            </main>
        )
    }
}

export default PlaysUser