import React, { Component } from "react";
import Post from "./Post";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Emerson Barbosa",
          avatar:
            "https://avatars3.githubusercontent.com/u/7695442?s=400&u=ec15e1ce4155c6929a320bee43a18c03834ed2f3&v=4"
        },
        date: "04 Julho 2019",
        content: "Olá, esse é meu primeiro post",
        comments: [
          {
            id: 1,
            author: {
              name: "João Miguel",
              avatar:
                "https://avatars3.githubusercontent.com/u/7695442?s=400&u=ec15e1ce4155c6929a320bee43a18c03834ed2f3&v=4"
            },
            content:
              "Lorem ipsum dolor sit amet, est dolor nisl pede lorem, parturient id orci vestibulum aliquam, non metus eros phasellus neque nam pede, justo nisl velit dignissim, pretium malesuada. In posuere eveniet sed, cras leo vitae, netus lacus. Leo duis. Scelerisque velit ipsum odio vel."
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Emerson Barbosa",
          avatar:
            "https://avatars3.githubusercontent.com/u/7695442?s=400&u=ec15e1ce4155c6929a320bee43a18c03834ed2f3&v=4"
        },
        date: "04 Julho 2019",
        content: "Esse é meu segundo post",
        comments: [
          {
            id: 1,
            author: {
              name: "Jośe Manoel",
              avatar:
                "https://avatars3.githubusercontent.com/u/7695442?s=400&u=ec15e1ce4155c6929a320bee43a18c03834ed2f3&v=4"
            },
            content:
              "Lorem ipsum dolor sit amet, est dolor nisl pede lorem, parturient id orci vestibulum aliquam, non metus eros phasellus neque nam pede, justo nisl velit dignissim, pretium malesuada. In posuere eveniet sed, cras leo vitae, netus lacus. Leo duis. Scelerisque velit ipsum odio vel."
          },
          {
            id: 2,
            author: {
              name: "Lucas Roberto",
              avatar:
                "https://avatars3.githubusercontent.com/u/7695442?s=400&u=ec15e1ce4155c6929a320bee43a18c03834ed2f3&v=4"
            },
            content:
              "Lorem ipsum dolor sit amet, est dolor nisl pede lorem, parturient id orci vestibulum aliquam, non metus eros phasellus neque nam pede, justo nisl velit dignissim, pretium malesuada. In posuere eveniet sed, cras leo vitae, netus lacus. Leo duis. Scelerisque velit ipsum odio vel."
          }
        ]
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div class="postlist">
        {posts.map(post => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;
