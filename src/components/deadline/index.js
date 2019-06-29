
import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';

import { SPRINT, SPRINT_SPAN } from '../../configs/sprint';
import { REFRESH_RATE } from '../../configs/app';
import DateService from "../../services/date";
import localization from '../../configs/localization';
import './index.scss';

const DAYS_THRESHOLD = 1;

class DeadlineComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { completion: 0, daysRemaining: 0 };
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), REFRESH_RATE.SPRINT);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    tick() {
        this.setState({
            completion: DateService.computePercentageRemaining(SPRINT_SPAN.START_DATE, SPRINT_SPAN.END_DATE, SPRINT_SPAN.ONLY_BUSINESS_DAYS),
            daysRemaining: DateService.computeTotalDays(new Date(), SPRINT_SPAN.END_DATE, false)
        });
    }

    showDays() {
        if (this.state.daysRemaining > DAYS_THRESHOLD) {
            return (
                <span> {this.state.daysRemaining}{localization.deadline.daysRemaining}</span>
            )
        } else {
            return (
                <span> {localization.deadline.deadlineComing}</span>
            )
        }
    }

    render() {
        return (
            <footer className="footer">
                <div className="sprint-info">
                    <div className="header">{SPRINT.NAME}</div>
                    <div>{this.showDays()}</div>
                </div>
                <ProgressBar variant="danger" now={this.state.completion} />
            </footer>
        );
    }
}

export default DeadlineComponent;