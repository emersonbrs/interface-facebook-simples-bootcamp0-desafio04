import React from "react";

function PostHeader({ author, date }) {
  return (
    <div class="postheader">
      <img src={author.avatar} />
      <div class="info">
        <strong id="author">{author.name}</strong>
        <span id="date">{date}</span>
      </div>
    </div>
  );
}

function Comments({ comments }) {
  return (
    <div class="commentsinfo">
      <div />
      {comments.map(comment => (
        <div key={comment.id} class="data">
          <img class="avatar" src={comment.author.avatar} />
          <p>
            <strong>{comment.author.name}</strong>
            <span>{comment.content}</span>
          </p>
        </div>
      ))}
    </div>
  );
}

function Post({ author, date, content, comments }) {
  return (
    <div class="post">
      <PostHeader author={author} date={date} />
      <span class="postcontent">{content}</span>
      <div class="line" />
      <Comments comments={comments} />
    </div>
  );
}

export default Post;
