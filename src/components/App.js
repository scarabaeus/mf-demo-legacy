import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Module1 from './Module1';
import Module2 from './Module2';

const App = () => {
  return (
    <Router>
      <nav>
        <span>
          <Link to="/">Module 1</Link>
        </span>{' '}
        |{' '}
        <span>
          <Link to="/module2">Module 2</Link>
        </span>
      </nav>
      <Switch>
        <Route path="/module2">
          <Module2 />
        </Route>
        <Route path="/">
          <Module1 />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
