
import React, { Component } from './node_modules/react';
import { connect } from './node_modules/react-redux';

import localization from '../../configs/localization';
import Loader from '../loader';

import './index.scss';

class SprintIssueBoard extends Component {

    constructor(props) {
        super(props);
        this.labels = localization.issues;
    }

    render() {
        return (
        <div className="widget issues-info widget-normal">
            <span className="header">{this.labels.header}</span>
            <div class="numberCircle float-right">2</div>
        </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        tickets: state.sprint.issues
    }
}

export default connect(mapStateToProps)(SprintIssueBoard);