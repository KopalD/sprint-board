import React from 'react';

import './app.scss';
import AppHeader from './components/header';
import DeadlineComponent from './components/deadline';
import IssueInfoComponent from './components/Issues';
import StoryComponent from './components/story';
import SlaveBoardComponent from './components/slave';
import ShameBoardComponent from './components/shame';
import BuildBoardComponent from './components/build';
import CodeFreezeComponent from './components/freeze';

function App() {


  return (
    <div className="container-fluid">
      <AppHeader />
      <div className="row mt-sm-3">
        <div className="col-md-3">
          <StoryComponent />
          <IssueInfoComponent />
        </div>

        <div className="col-md-5">
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
        </div>

        <div className="col-md-5" hidden>
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

export default App;
