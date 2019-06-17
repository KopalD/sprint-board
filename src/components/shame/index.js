
import React, { Component } from 'react';
import face from './../../assets/images/neutral.png'

import './index.scss';

class ShameBoardComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="shame-board">
                <div class="author">
                    <span className="header">Hall of Shame</span>
                </div>
                <div>
                    <img src={face} alt="shame-face" className="face" />
                </div>
                <p class="shame-name">
                    Gaurav Gupta
                </p>
                <p></p>
                <div class="shame-description">
                    Don't be scared of the truth because we need to restart the human foundation ...
            </div>
            </div>
        );
    }
}

export default ShameBoardComponent;