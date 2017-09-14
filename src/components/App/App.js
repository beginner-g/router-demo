import React, { Component } from 'react';
import Main from '../Main/Main'
import Layout from '../Layout/Layout'
import {HashRouter as Router,Route} from 'react-router-dom'
class App extends Component {
  state={
    post:[
      {
        id:'123',
        title:'Hello world',
        contant:'hahaha'
      },{
        id:'456',
        title:'git 基础',
        contant:'hahaha1'
      },{
        id:'789',
        title:'npm 基础',
        contant:'hahaha2'
      }
    ]
  }
  render() {
    return (
      <Router>
        <Layout>
          <Main/>
        </Layout>
      </Router>
    );
  }
}

export default App;
