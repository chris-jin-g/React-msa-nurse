import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Assignmet from './containers/pages/AssignmentPage/index';

function App() {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route path="/" component={Assignmet} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
