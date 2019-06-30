
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ProgressBar } from 'react-bootstrap';

import { SPRINT } from '../../configs/sprint';
import localization from '../../configs/localization';
import Loader  from '../loader';
import './index.scss';

const DAYS_THRESHOLD = 1;

class DeadlineBoard extends Component {

    constructor(props) {
        super(props);
        this.labels = localization.deadline;
    }

    render() {
        if (this.props.sprint) {
            return (
                <div className="deadline">
                    <div className="sprint-info">
                        <div className="header">{SPRINT.NAME}</div>
                        <div>{this.showDays()}</div>
                    </div>
                    <ProgressBar variant="danger" now={this.props.sprint.completion} />
                </div>
            );
        } else {
            return ( <Loader /> );
        }
    }

    showDays() {
        if (this.props.sprint.daysRemaining > DAYS_THRESHOLD) {
            return (
                <span> {this.props.sprint.daysRemaining} {this.labels.daysRemaining}</span>
            );
        } else {
            return (
                <span> {this.labels.deadlineComing}</span>
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        sprint: state.sprint
    }
}

export default connect(mapStateToProps)(DeadlineBoard);