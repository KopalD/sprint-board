
import React, { Component } from 'react';
import { connect } from 'react-redux';

import './index.scss';

class CodeFreezeComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        if(this.props.codeFreeze.enabled) {
        }
        return (
            <div className="code-freeze freeze">
                CODE FREEZE : OFF 
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        codeFreeze: state.codeFreeze
    }
}

export default connect(mapStateToProps)(CodeFreezeComponent);
