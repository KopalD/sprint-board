
import React, { Component } from 'react';
import { connect } from 'react-redux';
import SimpleBar from 'simplebar-react';

import { USER_TYPE } from '../../constants/userTypes';
import localization from '../../configs/localization';
import Loader from '../loader';

import './index.scss';

const ISSUE_COUNT_THRESHOLD = 10;

class SlaveBoard extends Component {

    constructor(props) {
        super(props);
        this.labels = localization.slave;
    }

    render() {
        const slaves = this.props.slaves;
        if (slaves) {
           return this.view(slaves);
        } else {
            return ( <Loader /> );
        }
    }

    renderSlaveDetails(slave, userType) {
        if (slave.userType === userType) {
            let style = '';
            if (slave.count >= ISSUE_COUNT_THRESHOLD) {
                style = 'st-danger';
            }
            return (<tr className={style}> 
                        <td>{slave.displayName}</td>
                        <td>{slave.count}</td>
                    </tr>);
            }
    }

    view(slaves) {
        return (
            <div className="slave-board">
                <span className="header">{this.labels.header}</span>
                <p>{this.labels.description}</p>
                <div className="category">
                    {this.labels.developers}
                </div>
                <SimpleBar className="dev-group">
                    <table className="table table-borderless col-11">
                        <tbody>
                            {
                               slaves.map( slave => this.renderSlaveDetails(slave, USER_TYPE.DEVELOPER) )
                            }
                        </tbody>
                    </table>
                </SimpleBar>
                <div className="category">
                    {this.labels.testers}
                </div>
                <SimpleBar className="tester-group">
                    <table className="table table-borderless col-11">
                    <tbody>
                            {
                               slaves.map( slave => this.renderSlaveDetails(slave, USER_TYPE.TESTER) )
                            }
                        </tbody>
                    </table>
                </SimpleBar>
            </div>
        );
    }
}

function mapStateToProps(state) {
    if (state.tickets.issues) {
        return {
            slaves: state.tickets.issues.assignee
        }
    } else { return undefined }
    
}

export default connect(mapStateToProps)(SlaveBoard);
