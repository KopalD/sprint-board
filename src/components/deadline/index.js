
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ProgressBar } from 'react-bootstrap';

import { SPRINT } from '../../configs/sprint';
import localization from '../../configs/localization';
import './index.scss';

const DAYS_THRESHOLD = 1;

class DeadlineComponent extends Component {

    constructor(props) {
        super(props);
    }

    showDays() {
        if (this.props.sprint.daysRemaining > DAYS_THRESHOLD) {
            return (
                <span> {this.props.sprint.daysRemaining} {localization.deadline.daysRemaining}</span>
            )
        } else {
            return (
                <span> {localization.deadline.deadlineComing}</span>
            )
        }
    }

    render() {
        if(this.props.sprint) {
        return (
            <footer className="footer">
                <div className="sprint-info">
                    <div className="header">{SPRINT.NAME}</div>
                    <div>{this.showDays()}</div>
                </div>
                <ProgressBar variant="danger" now={this.props.sprint.completion} />
            </footer>
        );
    } else {
        return (<div></div>)
    }
}
}

function mapStateToProps(state) {
    return {
        sprint: state.sprint
    }
}

export default connect(mapStateToProps)(DeadlineComponent);