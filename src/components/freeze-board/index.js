
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
        const codeFreeze = this.props.codeFreeze;
        if (codeFreeze) {
        this.update(codeFreeze);

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

    update(codeFreeze) {
        this.styles = "code-freeze ";
        if (codeFreeze.enabled) {
            this.styles += "freeze";
            this.message = this.labels.on;
        } else {
            this.message = this.labels.off;
        }
    }

}

function mapStateToProps(state) {
    console.log(state)
    return {
        codeFreeze: state.sprint.codeFreeze
    }
}

export default connect(mapStateToProps)(CodeFreezeBoard);
