import React, { Component } from 'react'
import PostItem from '../postitem/index'
import vader from "../../assets/Darth.jpg"
import sidios from "../../assets/sidios.jpg"
import luke from "../../assets/Luke.jpg"
import han from "../../assets/Han.jpg"
import chew from "../../assets/chew.jpg"



export default class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Lord Vader",
          avatar: vader
        },
        date: "04 Jun 2019",
        content: "Mano, to curtindo muito esse lado negro da força",
        comments: [
          {
            id: 1,
            author: {
              name: "Lord Sidios",
              avatar: sidios
            },
            content: "Eai Vader, vamo matar qunado o Luke?"
          },
          {
            id: 2,
            author: {
              name: "Luke Skywalker",
              avatar: luke
            },
            content: "quer dizer q ta bom pra ia? mas a pensão que é bom, nada..."
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Chew",
          avatar: chew
        },
        date: "04 Jun 2019",
        content: "aaaahhhweweeewewehhweweaasdasdsa asdasdasd wqehhweqhweqwej",
        comments: [
          {
            id: 1,
            author: {
              name: "Han Solo",
              avatar: han
            },
            content: "Não entendi direito @Chew"
          }
        ]
      }
    ]
  };
  render() {
    return (
      <div className="postlist">
          {this.state.posts.map(post=> (
          <PostItem key={post.id} {...post}/>
          ))}
      </div>     
    )
  }
}
