
import React, { Component } from 'react';

import './index.scss';

class IssueInfoComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className="widget issues-info widget-normal">
            <span className="header">Open Issues</span>
            <div class="numberCircle float-right">2</div>
        </div>
        );
    }
}

export default IssueInfoComponent;