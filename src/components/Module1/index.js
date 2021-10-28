import React from 'react';

const Module1 = ({ name = 'directly' }) => (
  <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
    <div
      style={{
        borderBottom: '1px solid #808080',
        lineHeight: '3rem',
        flexBasis: '3rem',
        paddingLeft: '1rem',
      }}
    >
      Application 1 Module 1 - Loaded {name}
    </div>
    <div style={{ marginTop: '1rem' }}>
      mf-demo-legacy Dependencies:
      <ul>
        <li>
          <code>react 17.0.2</code>
        </li>
        <li>
          <code>react-router 17.0.2</code>
        </li>
        <li>
          <code>react-router-dom 5.3.0</code>
        </li>
      </ul>
    </div>
    <div style={{ flex: 1, marginTop: '1rem' }}>
      <button>Module 1 Button</button>
    </div>
  </div>
);
export default Module1;
