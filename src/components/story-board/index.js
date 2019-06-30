
import React, { Component } from 'react';

import './index.scss';

class StoryBoard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="widget story">
                <span className="header">Stories</span>
                <table class="table col-md-11">
                        <tr>
                            <td><div className="circle blue"></div></td>
                            <td>To-Do</td>
                            <td>4</td>
                        </tr>
                        <tr>
                        <td>
                            <div class="circle yellow"></div></td>
                            <td>In-Progress</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td><div class="circle orange"></div></td>
                            <td>Under-Testing</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td><div class="circle green"></div></td>
                            <td>Done</td>
                            <td>1</td>
                        </tr>
                </table>
            </div>
        );
    }
}

export default StoryBoard;