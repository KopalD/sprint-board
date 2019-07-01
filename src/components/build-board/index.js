
import React, { Component } from 'react';

import './index.scss';

class BuildBoard extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="widget build-board">
        <span className="header">Build Status</span>
        <div className="row">
          <svg width="450px" height="228px" viewBox="30 0 54 64" version="1.1" >
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <path class="beat-loader" d="M0.5,38.5 L16,38.5 L19,25.5 L24.5,57.5 L31.5,7.5 L37.5,46.5 L43,38.5 L53.5,38.5 L253.5,38.5" id="Path-2" stroke-width="1.2">
              </path>
            </g>
          </svg>
        </div>
        <div className="row">
          <div className="col build-data">
            <span className="btn btn-success green bld-status btn-lg"></span> 
            <span className="build-name">Front-End</span>
            <div className="row">
                <div className="dialogbox">
                  <div className="body">
                    <span className="tip tip-up"></span>
                    <div className="message">
                      <span><b>BUILD STATUS</b>: PASSING</span>
                      <span><b>BUILD NUMBER</b>: #548</span>
                      <span><b>LAST UPDATED</b>: 12/05/2019 18:20 PM</span>
                      <span><b>TRIGGERED BY</b>: KOPAL DARBARI</span>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div className="col build-data">
            <span className="btn btn-success green bld-status btn-lg"></span> 
            <span className="build-name">Back-End</span>
            <div className="row">
                <div className="dialogbox">
                  <div className="body">
                    <span className="tip tip-up"></span>
                    <div className="message">
                      <span><b>BUILD STATUS</b>: PASSING</span>
                      <span><b>BUILD NUMBER</b>: #548</span>
                      <span><b>LAST UPDATED</b>: 12/05/2019 18:20 PM</span>
                      <span><b>TRIGGERED BY</b>: KOPAL DARBARI</span>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BuildBoard;