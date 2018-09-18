import React, { Component } from "react";
import "../App.css";

class Posts extends Component {
  render() {
    const postItems = this.state.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div className="posts">
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}

export default Posts;
