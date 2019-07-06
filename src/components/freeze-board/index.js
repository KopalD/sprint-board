
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
        this.update();

        if (this.props.sprint) {
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

    update() {
        this.styles = "code-freeze ";
        if (this.props.sprint) {
            this.styles += "freeze";
            this.message = this.labels.on;
        } else {
            this.message = this.labels.off;
        }
    }

}

function mapStateToProps(state) {
    return {
        sprint: state.sprint
    }
}

export default connect(mapStateToProps)(CodeFreezeBoard);
