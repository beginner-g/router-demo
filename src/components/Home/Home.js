import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Home extends Component {
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
    const list=this.state.post.map((item,i)=>(
      <li key={i}>
        <Link to={`/post/${item.id}`}>{item.title}</Link>
      </li>
    ))
    return (
      <div className="home">
        <ul>
          {list}
        </ul>
      </div>
    );
  }
}

export default Home;
