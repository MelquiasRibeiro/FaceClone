import React, { Component } from 'react'
import PostItem from '../postitem/index'

export default class PostList extends Component {
  render() {
    return (
      <div className="postlist">
          <PostItem/>
          <PostItem/>
      </div>     
    )
  }
}
