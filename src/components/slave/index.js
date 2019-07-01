
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
                <p class="description">Sack 'em all</p>
                <div className="category">
                    DEVELOPERS
                </div>
                <table className="table table-borderless col-md-11">
                    <tbody>
                        <tr>
                            <td>Nitesh Kumar</td>
                            <td>4</td>
                        </tr>
                        <tr className="warning">
                            <td>Gaurav Gupta</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>Mangesh Padhri</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>Kopal Darbari</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>Pushkar Kinkar</td>
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
                            <td>Anu Singla</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>Vikas Giri</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>Ajendra Singh</td>
                            <td>2</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default SlaveBoardComponent;