
import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';

import { SPRINT, SPRINT_SPAN } from '../../configs/sprint';
import { REFRESH_RATE } from '../../configs/app';
import DateService from "../../services/dateService";
import './index.scss';

class DeadlineComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { daysPassed: 0 };
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

    render() {
        return (
            <footer className="footer">
                <div className="sprint-info">
                    <div className="header">{SPRINT.NAME}</div>
                    <div> {this.state.daysRemaining} Days remaining ....</div>
                </div>
                <ProgressBar variant="danger" now={this.state.completion} />
            </footer>
        );
    }
}

export default DeadlineComponent;