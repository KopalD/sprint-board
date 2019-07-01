
import React, { Component } from 'react';
import { connect } from 'react-redux';

import localization from '../../configs/localization';
import Loader from '../loader';

import './index.scss';

class StoryBoard extends Component {

    constructor(props) {
        super(props);
        this.labels = localization.story;
    }

    render() {
        return (
            <div class="widget story">
                <span className="header">{this.labels.header}</span>
                <table className="table col-11">
                    <tr>
                        <td><div className="circle to-do"></div></td>
                        <td>{this.labels.todo}</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td><div className="circle in-progress"></div></td>
                        <td>{this.labels.progress}</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td><div className="circle under-testing"></div></td>
                        <td>{this.labels.testing}</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td><div className="circle done"></div></td>
                        <td>{this.labels.done}</td>
                        <td>1</td>
                    </tr>
                </table>
            </div>
        );
    }

    update() {
        
    }
}

function mapStateToProps(state) {
    return {
        sprint: state.codeFreeze
    }
}

export default connect(mapStateToProps)(StoryBoard);
