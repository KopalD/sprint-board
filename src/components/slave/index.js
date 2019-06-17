
import React, { Component } from 'react';

import './index.scss';

class SlaveBoardComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="slave-board">
                <span className="header">Slave Board</span>
                <p class="description">Sack'em all</p>
                <div className="category">
                    DEVELOPERS
                </div>
                <table className="table table-borderless col-md-11">
                    <tbody>
                        <tr>
                            <td scope="row">Nitesh Kumar</td>
                            <td>4</td>
                        </tr>
                        <tr className="warning">
                            <td scope="row">Gaurav Gupta</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td scope="row">Mangesh Padhri</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td scope="row">Kopal Darbari</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td scope="row">Pushkar Kinkar</td>
                            <td>1</td>
                        </tr>
                    </tbody>
                </table>
                <div className="category">
                    TESTERS
            </div>
                <table className="table table-borderless col-md-11">
                    <tbody>
                        <tr>
                            <td scope="row">Anu Singla</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td scope="row">Vikas Giri</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td scope="row">Ajendra Singh</td>
                            <td>2</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default SlaveBoardComponent;