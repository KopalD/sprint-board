
import React, { Component } from 'react';
import { connect } from 'react-redux';

import localization from '../../configs/localization';
import Loader from '../loader';

import './index.scss';

const WARNING_THRESHOLD = 5;
const DANGER_THRESHOLD = 10;

class SprintIssueBoard extends Component {

    constructor(props) {
        super(props);
        this.labels = localization.issues;
        this.styles = null;
    }

    render() {
        const issues = this.props.issues;
        if (issues) {
            this.update(issues.count);
            return this.view(issues);
        } else {
            return (<Loader />);
        }
    }

    view(issues) {
        return (
            <div className={this.styles}>
                <span className="header">{this.labels.header}</span>
                <div class="issue-count float-right">{issues.count}</div>
            </div>
        );
    }

    update(count) {
        this.styles = "widget sprint-issue ";
        if (count >= DANGER_THRESHOLD) {
            this.styles += "st-danger";
        } else if (count >= WARNING_THRESHOLD) {
            this.styles += "st-warning";
        }
    }
}

function mapStateToProps(state) {
    return {
        issues: state.tickets.issues
    }
}

export default connect(mapStateToProps)(SprintIssueBoard);