import React, { Component } from 'react';

import './app.scss';
import AppHeader from './components/app-header';
import BuildBoard from './components/build-board';
import CodeFreezeBoard from './components/freeze-board';
import DeadlineBoard from './components/deadline-board';

import StoryBoard from './components/story-board';
import SprintIssueBoard from './components/issue-board/sprint';
import SlaveBoard from './components/slave-board';


import ShameBoard from './components/shame-board';
import TicketsBoard from './components/ticket-board';
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
            <StoryBoard />
            <SprintIssueBoard />
          </div>

          <div className="col-md-5" hidden>
            <TicketsBoard />
          </div>

          <div className="col-md-5">
            <div className="row">
              <div className="col-md-6">
                <SlaveBoard />
              </div>
              <div className="col-md-6">
                <div className="row">
                  <ShameBoard />
                </div>
                <div className="row">
                  <CodeFreezeBoard />
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="row">
              <BuildBoard />
            </div>
          </div>

        </div>
        <DeadlineBoard />
      </div>
    );
  }
}

export default App;