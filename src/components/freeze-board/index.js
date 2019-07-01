
import React, { Component } from 'react';
import { connect } from 'react-redux';

import localization from '../../configs/localization';
import flake from '../../assets/images/snowflake.png'
import Loader from '../loader';

import './index.scss';

class CodeFreezeBoard extends Component {

    constructor(props) {
        super(props);
        this.labels = localization.codeFreeze;
        this.message = null;
        this.styles = null;
    }

    render() {
        this.checkStatus();

        if (this.props.codeFreeze) {
            return (
                <div className={this.styles}>
                    {this.message}
                    <img src={flake} alt="status" className="flake float-right" />
                </div>
            );
        } else {
            return (<Loader />)
        }
    }

    checkStatus() {
        this.styles = "code-freeze ";
        if (this.props.codeFreeze.enabled) {
            this.styles += "freeze";
            this.message = this.labels.on;
        } else {
            this.message = this.labels.off;
        }
    }

}

function mapStateToProps(state) {
    return {
        codeFreeze: state.codeFreeze
    }
}

export default connect(mapStateToProps)(CodeFreezeBoard);
