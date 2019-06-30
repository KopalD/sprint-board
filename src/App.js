import React, { Component } from 'react';

import './app.scss';
import AppHeader from './components/header';
import DeadlineComponent from './components/deadline';
import IssueInfoComponent from './components/Issues';
import StoryComponent from './components/story';
import SlaveBoardComponent from './components/slave';
import ShameBoardComponent from './components/shame';
import BuildBoardComponent from './components/build';
import CodeFreezeComponent from './components/freeze';
import TicketBoardComponent from './components/ticket';
import AppService from './services/app';

class App extends Component {

  constructor() {
    super();
    this.service = new AppService();
  }

  componentDidMount() {
    this.service.bootstarp(this.props.store);
  }
  
  componentWillUnmount() {
    this.service.destroy();
  }

  render() {
    return (
      <div className="container-fluid">
        <AppHeader />
        <div className="row mt-sm-3">
          <div className="col-md-3">
            <StoryComponent />
            <IssueInfoComponent />
          </div>

          <div className="col-md-5" hidden>
            <TicketBoardComponent />
          </div>

          <div className="col-md-5">
            <div className="row">
              <div className="col-md-6">
                <SlaveBoardComponent />
              </div>
              <div className="col-md-6">
                <div className="row">
                  <ShameBoardComponent />
                </div>
                <div className="row">
                  <CodeFreezeComponent />
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="row">
              <BuildBoardComponent />
            </div>
          </div>

        </div>
        <DeadlineComponent />
      </div>
    );
  }
}

export default App;