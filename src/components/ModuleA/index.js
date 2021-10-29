import React from 'react';
import "./index.css"

const ModuleA = ({ name = 'directly' }) => (
  <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
    <div className="collision-test">Collisions Test: Defined as red</div>
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
          <code>react 16.2.0</code>
        </li>
        <li>
          <code>react-router 16.2.0</code>
        </li>
        <li>
          <code>react-router-dom 4.2.2</code>
        </li>
      </ul>
    </div>
    <div style={{ flex: 1, marginTop: '1rem' }}>
      <button>Legacy Module A Button</button>
    </div>
  </div>
);
export default ModuleA;
