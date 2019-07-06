
import React, { Component } from 'react';

import './index.scss';

class TicketBoard extends Component {

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
                          <td> CCF-1609 </td>
                          <td> UI + Integration : Check positive pay : Record Activity: Edit : Desktop + Mobile </td>
                          <td>Nitesh Kumar</td>
                          <td>M</td>
                      </tr>
                      <tr className="in-progress">
                          <td> CCF-1609 </td>
                          <td> UI + Integration : Check positive pay : Record Activity </td>
                          <td>Nitesh Kumar</td>
                          <td>M</td>
                      </tr>
                      <tr className="in-progress">
                          <td> CCF-1609 </td>
                          <td> UI + Integration : Check positive pay : Record Activity </td>
                          <td>Nitesh Kumar</td>
                          <td>M</td>
                      </tr>
                      <tr className="under-testing">
                          <td> CCF-1609 </td>
                          <td> UI + Integration : Check positive pay : Record Activity </td>
                          <td>Nitesh Kumar</td>
                          <td>M</td>
                      </tr>
                      <tr className="in-progress">
                          <td> CCF-1609 </td>
                          <td> UI + Integration : Check positive pay : Record Activity </td>
                          <td>Nitesh Kumar</td>
                          <td>M</td>
                      </tr>
                      <tr className="done">
                          <td> CCF-1609 </td>
                          <td> UI + Integration : Check positive pay : Record Activity </td>
                          <td>Nitesh Kumar</td>
                          <td>M</td>
                      </tr>
              </table>
              </div>
              </div>

    );
  }
}

export default TicketBoard;