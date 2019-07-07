
import React, { Component } from 'react';
import { connect } from 'react-redux';

import localization from '../../configs/localization';
import Loader from '../loader';

import './index.scss';

class TicketBoard extends Component {

  constructor(props) {
    super(props);
    this.labels = localization.tickets;
    this.header = null;
  }

  render() {
    let tickets = this.props.tickets;
    if (tickets) {
      tickets = this.update(tickets)
      return this.view(tickets);
    } else {
      return (<Loader />);
    }
  }

  update(tickets) {
    const mode = this.props.mode;
    if (mode ===  modes.ISSUES) {
      this.header = localization.tickets.header.issues;
      tickets = tickets.issues;
    } else if (mode !==  modes.STORY) {
      this.header = localization.tickets.header.stories;
      tickets = tickets.stories;
    }
    return tickets;
  }

  renderTicket(ticket) {
    return (<tr className="to-do">
              <td> {ticket.id} </td>
              <td> {ticket.title} </td>
              <td> {ticket.assigneeName} </td>
              <td> {ticket.priority} </td>
            </tr>);
  }

  view(tickets) {
    return (
      <div className="ticket-holder">
        <div className="header">{ this.header }</div>
        <div className="tickets">
          <table className="table">
          {
              tickets.items.map( ticket => this.renderTicket(ticket) )
          }
          </table>
        </div>
      </div>

    );
  }
}

export const modes = {
  ISSUES  : "ISSUES",
  STORY : "STORY",
}

function mapStateToProps(state) {
  return {
    tickets: state.tickets
  }
}

export default connect(mapStateToProps)(TicketBoard);
