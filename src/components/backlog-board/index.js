
import React, { Component } from 'react';
import { connect } from 'react-redux';

import localization from '../../configs/localization';
import Loader from '../loader';

import './index.scss';

class BacklogBoard extends Component {

    constructor(props) {
        super(props);
        this.labels = localization.backlog;
    }

    render() {
        const items = this.props.backlog;
        if (items) {
            return this.view(items);
        } else {
            return (<Loader />);
        }
    }

    view(items) {
        return (
            <div className="col-12 backlog-board">
            <div class="author">
                <span className="header">{this.labels.header}</span>
            </div>
            <div className="backlog-items">
                {items.count}
            </div>
            <p className="sub-text">{this.labels.itemsRemaining}</p>
        </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        backlog: state.tickets.backlog
    }
}

export default connect(mapStateToProps)(BacklogBoard);