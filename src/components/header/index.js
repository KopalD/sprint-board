
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { PROJECT } from '../../configs/app';
import { BUILD_STATUS } from '../../constants/builds';
import localization from '../../configs/localization';
import success from './../../assets/icons/green.png';
import building from './../../assets/icons/yellow.png';
import failure from './../../assets/icons/red.png';
import offline from './../../assets/icons/gray.png';
import './index.scss';

class AppHeader extends Component {

    updateHeader() {
        this.styles = "build-status-icon ";
        if (this.props.builds) {
            switch (this.props.builds.status) {
                case BUILD_STATUS.PASSING:
                    this.buildStatus = success
                    this.styles += "spin-ok";
                    break;

                case BUILD_STATUS.BUILDING:
                    this.buildStatus = building
                    this.styles += "spin-build";
                    break;

                case BUILD_STATUS.FAILING:
                    this.buildStatus = failure
                    break;

                case BUILD_STATUS.OFFLINE:
                    this.buildStatus = offline
                    break;

                default:
            }
        }
    }

    render() {
        this.updateHeader();
        return (
            <header className="app-header">
                <div className="row">
                    <div className="col-md-1">
                        <img src={this.buildStatus} alt="status" className={this.styles} />
                    </div>
                    <div className="col-md-8 header-content">
                        <div className="row h-50">
                            <font className="heading">{PROJECT.NAME}</font>
                        </div>
                        <div className="row">
                            <span className="team-badge">{localization.header.team} {PROJECT.TEAM}</span>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

function mapStateToProps(state) {
    return {
        builds: state.builds
    };
}

export default connect(mapStateToProps)(AppHeader);