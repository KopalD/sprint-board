
import React, { Component } from 'react';

import './index.scss';

class CodeFreezeComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="code-freeze freeze">
                CODE FREEZE : OFF
            </div>
        );
    }
}

export default CodeFreezeComponent;