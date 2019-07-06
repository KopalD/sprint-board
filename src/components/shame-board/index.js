
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Loader from '../loader';
import face from './../../assets/images/neutral.png'
import localization from '../../configs/localization';
import './index.scss';

class ShameBoard extends Component {

    constructor(props) {
        super(props);
        this.labels = localization.shame;
        this.quote = null;
    }

    render() {
        const user = this.props.user;
        if (user) {
            this.update();
            return this.view(user);
        } else {
            return ( <Loader /> );
        }
       
    }

    view(user) {
        return (
            <div className="col-12 shame-board">
                <div class="author">
                    <span className="header">{this.labels.header}</span>
                </div>
                <div>
                    <img src={face} alt="shame-face" className="face" />
                </div>
                <p className="shame-name">
                    {user.name}
                </p>
                <div className="shame-description">
                    {this.quote}
                </div>
            </div>
        );
    }

    update() {
        const random = this.generateRandomNumber(1, this.labels.quotes.length);
        this.quote = this.labels.quotes[random - 1];
    }

    generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
function mapStateToProps(state) {
    return {
        user: state.tickets.issues.shame
    };
}

export default connect(mapStateToProps)(ShameBoard);