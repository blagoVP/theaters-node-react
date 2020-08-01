import React, { Component } from 'react';
import Info from '../info';

class PlaysGuest extends Component {

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
                    <h1>Best Rated Plays</h1>
                    <div className="theaters-container">
                        <div>
                            <div className="home-image">
                                <img src="https://media.timeout.com/images/103727744/380/285/image.jpg"
                                    alt="Card image cap" width="400"/>
                            </div>
                            <div className="info">
                                <h4>Who's Afraid of Virginia Woolf? by Edward Albee</h4>
                            </div>
                        </div>

                        <div>
                            <div className="home-image">
                                <img src="https://media.timeout.com/images/103727745/380/285/image.jpg"
                                    alt="Card image cap" width="400"/>
                            </div>
                            <div className="info">
                                <h4>Death of a Salesman by Arthur Miller</h4>
                            </div>
                        </div>

                        <div>
                            <div className="home-image">
                                <img src="https://media.timeout.com/images/103727757/380/285/image.jpg"
                                    alt="Card image cap" width="400"/>
                            </div>
                            <div className="info">
                                <h4>This Is Our Youth by Kenneth Lonergan</h4>
                            </div>
                        </div>

                        {/* <!-- <h4>No plays yet...</h4> --> */}
                    </div>
                </section>
            </main>
        )
    }
}

export default PlaysGuest