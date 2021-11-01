import React from 'react';
import "./index.css"

class ModuleA extends React.Component {
  constructor({name = 'directly' }) {
    super();
    this.state = { text: '' };
    this.name = name;
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    console.log(event.target.value);
    this.setState(() => ({
      text: event.target.value
    }));
  }
  render() {
    return (
      
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
      Legacy Module A - Loaded {this.name}
    </div>
    <div style={{ marginTop: '1rem' }}>
      mf-demo-legacy Dependencies:
      <ul>
        <li>
          <code>react {React.version}</code>
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
      <span>Text: </span>
        <input onChange={this.handleChange} value={this.state.text} />
    </div>
  </div>
    );
  }
}

export default ModuleA;
