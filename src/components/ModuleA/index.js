import React from 'react';

const ModuleA = ({ name = 'directly' }) => (
  <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
    <div
      style={{
        borderBottom: '1px solid #808080',
        lineHeight: '3rem',
        flexBasis: '3rem',
        paddingLeft: '1rem',
      }}
    >
      Legacy Module A - Loaded {name}
    </div>
    <div style={{ marginTop: '1rem' }}>
      mf-demo-legacy Dependencies:
      <ul>
        <li>
          <code>react 16.12.0</code>
        </li>
        <li>
          <code>react-router 16.12.0</code>
        </li>
        <li>
          <code>react-router-dom 5.1.0</code>
        </li>
      </ul>
    </div>
    <div style={{ flex: 1, marginTop: '1rem' }}>
      <button>Legacy Module A Button</button>
    </div>
  </div>
);
export default ModuleA;
