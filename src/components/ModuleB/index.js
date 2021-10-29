import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Section1 from './Section1';
import Section2 from './Section2';

const ModuleB = ({ name = 'directly' }) => (
  <Router>
    <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
      <div
        style={{
          borderBottom: '1px solid #808080',
          lineHeight: '3rem',
          flexBasis: '3rem',
          paddingLeft: '1rem',
        }}
      >
        Application 1 Module B - Loaded {name}
      </div>
      <nav>
        <span>
          <Link to="/moduleB/section1">Section 1</Link>
        </span>{' '}
        |{' '}
        <span>
          <Link to="/moduleB/section2">Section 2</Link>
        </span>
      </nav>
      <Switch>
        <Route path="/moduleB/section2">
          <Section2 />
        </Route>
        <Route path="/moduleB/">
          <Section1 />
        </Route>
      </Switch>
    </div>
  </Router>
);
export default ModuleB;
