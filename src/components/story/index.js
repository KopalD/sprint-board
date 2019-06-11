
import React, { Component } from 'react';

import './index.scss';

class StoryComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="widget story">
                <span className="header">Stories</span>
                <table class="table">
                    <tbody>
                        <tr>
                            <td scope="row">To-Do</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td scope="row">In-Progress</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td scope="row">Under-Testing</td>
                            <td>2</td>
                        </tr>
                        <tr >
                            <td scope="row">Done</td>
                            <td>1</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default StoryComponent;