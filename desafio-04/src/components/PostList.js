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
          avatar:
            'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/48291454-d96b-40fa-bbd8-1f278310fa79/dcx0p42-ff7e0f92-0fab-452d-8501-e1943413cdc7.png/v1/fill/w_1280,h_1280,strp/avatar_icon_stitchbase_by_dapezza_dcx0p42-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzQ4MjkxNDU0LWQ5NmItNDBmYS1iYmQ4LTFmMjc4MzEwZmE3OVwvZGN4MHA0Mi1mZjdlMGY5Mi0wZmFiLTQ1MmQtODUwMS1lMTk0MzQxM2NkYzcucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.YpMPU8AsDKy_mOEPdrgk8tbE3eTj1ewHpkUa3qApV9k',
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar:
                'http://www.newdesignfile.com/postpic/2014/06/face-avatar-icon_249311.png',
            },
            content: 'Conteúdo do comentário',
          },
          {
            id: 2,
            author: {
              name: 'Diego Fernandes',
              avatar:
                'http://www.newdesignfile.com/postpic/2014/06/face-avatar-icon_249312.jpg',
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
          avatar:
            'http://www.newdesignfile.com/postpic/2014/06/avatar-icon-head_249314.png',
        },
        date: '03 Jul 2019',
        content: 'Bora termina o desafio 04?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Daniel',
              avatar:
                'http://www.newdesignfile.com/postpic/2014/06/avatar-icon_249316.png',
            },
            content: 'Bora !!!',
          },
          {
            id: 2,
            author: {
              name: 'Junior',
              avatar:
                'http://www.newdesignfile.com/postpic/2014/06/avatar-icon_249320.png',
            },
            content: 'Finalizado',
          },
          {
            id: 3,
            author: {
              name: 'Diego Fernandes',
              avatar:
                'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/48291454-d96b-40fa-bbd8-1f278310fa79/dcx0p42-ff7e0f92-0fab-452d-8501-e1943413cdc7.png/v1/fill/w_1280,h_1280,strp/avatar_icon_stitchbase_by_dapezza_dcx0p42-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzQ4MjkxNDU0LWQ5NmItNDBmYS1iYmQ4LTFmMjc4MzEwZmE3OVwvZGN4MHA0Mi1mZjdlMGY5Mi0wZmFiLTQ1MmQtODUwMS1lMTk0MzQxM2NkYzcucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.YpMPU8AsDKy_mOEPdrgk8tbE3eTj1ewHpkUa3qApV9k',
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
