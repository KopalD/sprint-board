import React from 'react';

import './app.scss';
import AppHeader from './header';
import DeadlineComponent from './components/deadline';
import IssueInfoComponent from './components/Issues';
import StoryComponent from './components/story';

function App() {
  return (
    <div className="container-fluid">
      <AppHeader />
      <div className="row mt-sm-3">
        <div className="col-md-3">

        <StoryComponent />
        <IssueInfoComponent />

        </div>
        

      </div>
      <DeadlineComponent />
    </div>
  );
}

export default App;
