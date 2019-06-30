
import React, { Component } from 'react';

import './index.scss';

class TicketBoardComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ticket-holder">
      <div className="header">Open Stories</div>
      <div className="tickets">
              <table className="table">
                      <tr className="to-do">
                          <td scope="row"> CCF-1609 </td>
                          <td scope="row"> UI + Integration : Check positive pay : Record Activity: Edit : Desktop + Mobile </td>
                          <td scope="row">Nitesh Kumar</td>
                          <td>M</td>
                      </tr>
                      <tr className="in-progress">
                          <td scope="row"> CCF-1609 </td>
                          <td scope="row"> UI + Integration : Check positive pay : Record Activity </td>
                          <td scope="row">Nitesh Kumar</td>
                          <td>M</td>
                      </tr>
                      <tr className="in-progress">
                          <td scope="row"> CCF-1609 </td>
                          <td scope="row"> UI + Integration : Check positive pay : Record Activity </td>
                          <td scope="row">Nitesh Kumar</td>
                          <td>M</td>
                      </tr>
                      <tr className="under-testing">
                          <td scope="row"> CCF-1609 </td>
                          <td scope="row"> UI + Integration : Check positive pay : Record Activity </td>
                          <td scope="row">Nitesh Kumar</td>
                          <td>M</td>
                      </tr>
                      <tr className="in-progress">
                          <td scope="row"> CCF-1609 </td>
                          <td scope="row"> UI + Integration : Check positive pay : Record Activity </td>
                          <td scope="row">Nitesh Kumar</td>
                          <td>M</td>
                      </tr>
                      <tr>
                          <td scope="row"> CCF-1609 </td>
                          <td scope="row"> UI + Integration : Check positive pay : Record Activity </td>
                          <td scope="row">Nitesh Kumar</td>
                          <td>M</td>
                      </tr>
              </table>
              </div>
              </div>

    );
  }
}

export default TicketBoardComponent;