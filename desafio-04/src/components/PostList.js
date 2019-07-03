import React, { Component } from 'react';

import avatar from '../assets/man.svg';

import './PostList.css';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Diego Fernandes',
          avatar,
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar,
            },
            content: 'Conteúdo do comentário',
          },
          {
            id: 2,
            author: {
              name: 'Diego Fernandes',
              avatar,
            },
            content:
              '	Lorem ipsum suspendisse nisl lacus vestibulum taciti vel auctor elementum himenaeos, ullamcorper risus hac rhoncus aptent nisl hac habitant porta pellentesque venenatis, morbi integer magna aliquet mollis quisque semper consectetur himenaeos.',
          },
        ],
      },
      {
        id: 1,
        author: {
          name: 'Rafael Sene',
          avatar,
        },
        date: '03 Jul 2019',
        content: 'Bora termina o desafio 04?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Daniel',
              avatar,
            },
            content: 'Bora !!!',
          },
          {
            id: 2,
            author: {
              name: 'Junior',
              avatar,
            },
            content: 'Finalizado',
          },
          {
            id: 3,
            author: {
              name: 'Diego Fernandes',
              avatar,
            },
            content: 'Bora coda Dev',
          },
        ],
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <>
        <section>
          {posts.map(post => (
            <article key={post.id}>
              <header>
                <div className="user-info">
                  <img src={post.author.avatar} alt="" />
                  <div>
                    <span>{post.author.name}</span>
                    <span className="place">{post.date}</span>
                  </div>
                </div>
                <span>{post.content}</span>
              </header>
              {post.comments.map(comment => (
                <div key={comment.id} className="comments">
                  <div>
                    <img src={comment.author.avatar} alt="" />
                  </div>
                  <div className="content">
                    <span>{comment.content}</span>
                  </div>
                </div>
              ))}
            </article>
          ))}
        </section>
      </>
    );
  }
}

export default PostList;
