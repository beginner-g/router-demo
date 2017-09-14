import React, { Component } from 'react';
import Home from '../Home/Home'
import Post from '../Post/Post'
import './main.css'
import {HashRouter as Router,Route} from 'react-router-dom'
class Main extends Component{
  render(){
    return(
      <Router>
        <div className='main'>
          <Route exact path='/' component={Home}/>
          <Route path='/post/:beginner' component={Post}/>
        </div>
      </Router>
    )
  }
}
export default Main
