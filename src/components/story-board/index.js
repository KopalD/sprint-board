
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
        const stories = this.props.stories;

        if (stories) {
            return (
                <div class="widget story">
                    <span className="header">{this.labels.header}</span>
                    <table className="table col-11">
                        <tr>
                            <td><div className="indicator to-do"></div></td>
                            <td>{this.labels.todo}</td>
                            <td>{stories.status.todo}</td>
                        </tr>
                        <tr>
                            <td><div className="indicator in-progress"></div></td>
                            <td>{this.labels.progress}</td>
                            <td>{stories.status.progress}</td>
                        </tr>
                        <tr>
                            <td><div className="indicator under-testing"></div></td>
                            <td>{this.labels.testing}</td>
                            <td>{stories.status.testing}</td>
                        </tr>
                        <tr>
                            <td><div className="indicator done"></div></td>
                            <td>{this.labels.done}</td>
                            <td>{stories.status.done}</td>
                        </tr>
                    </table>
                </div>
            );
        } else {
            return (<Loader />);
        }
    }
}

function mapStateToProps(state) {
    return {
        stories: state.tickets.stories
    }
}

export default connect(mapStateToProps)(StoryBoard);
