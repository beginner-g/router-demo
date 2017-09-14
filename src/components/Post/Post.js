import React, { Component } from 'react';
class Post extends Component {
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
    const {beginner} =this.props.match.params
    const {post}=this.state
    const posts=post.find(t=>t.id===beginner)
    return (
      <div>
        <h1>
          {posts.title}
        </h1>
        <p>
          {posts.contant}
        </p>
      </div>
    );
  }
}

export default Post;
