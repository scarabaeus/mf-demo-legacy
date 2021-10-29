import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ModuleA from './ModuleA';
import ModuleB from './ModuleB';
import './App.css';

const App = () => {
  return (
    <Router>
      <nav>
        <span>
          <Link to="/">Module A</Link>
        </span>{' '}
        |{' '}
        <span>
          <Link to="/moduleB">Module B</Link>
        </span>
      </nav>
      <Switch>
        <Route path="/moduleB">
          <ModuleB />
        </Route>
        <Route path="/">
          <ModuleA />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
