import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './layout.css'
class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <div className="header">
          <h1><Link  style={{color:'yellow',textDecoration:'none'}}to='/'>首页</Link></h1>
        </div>
        {this.props.children}
        <div className="footer">
          <h2>footer</h2>
        </div>
      </div>
    );
  }
}

export default Layout;
