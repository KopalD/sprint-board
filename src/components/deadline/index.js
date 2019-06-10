
import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';

import { SPRINT_SPAN } from '../../configs/sprint';
import DateService from "../../services/dateService";
import './index.scss';

class Deadline extends Component {

    constructor(props) {
        super(props);
        this.state = { daysPassed: 0 };
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 3000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    tick() {
        this.setState({
            daysPassed: DateService.computePercentageRemaining(SPRINT_SPAN.START_DATE, SPRINT_SPAN.END_DATE, true)
        });
    }

    render() {
        return (
            <footer className="footer">
                <div className="sprint-info">
                    <div className="header">SPRINT 23 : VODKA </div>
                    <div> 7 Days remaining ....</div>
                </div>
                <ProgressBar variant="danger" now={this.state.daysPassed} />
            </footer>
        );
    }
}

export default Deadline;