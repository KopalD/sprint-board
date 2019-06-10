import React from 'react';

import './app.scss';
import AppHeader from './header';
import Deadline from './components/deadline';

function App() {
  return (
    <div className="container-fluid">
      <AppHeader />
      <div className="row mt-sm-4">
        <div className="col-md-3">

          <div class="widget">
          </div>


          <div className="issues-info">
            <div className="header">Open Issues</div>
            <div class="numberCircle float-right">2</div>

          </div>

        </div>
        

      </div>
      <Deadline />
    </div>
  );
}

export default App;
