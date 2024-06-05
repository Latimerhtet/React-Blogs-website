import React from "react";
import { Form } from "react-router-dom";

const PostFrom = () => {
  return (
    <section className="postFrom-main">
      <h3>Create your post here!</h3>
      <Form action="post" className="postForm">
        <div>
          <label htmlFor="post-title">Post Title</label>
          <input type="text" name="title" id="post-title" />
        </div>
        <div>
          <label htmlFor="post-date">Post Date</label>
          <input type="date" name="date" id="post-date" />
        </div>
        <div>
          <label htmlFor="post-image">Image URL</label>
          <input type="text" name="image" id="post-image" />
        </div>
        <div>
          <label htmlFor="post-description">Description</label>
          <textarea
            name="description"
            id="post-description"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <button>Post on NewsFeed</button>
      </Form>
    </section>
  );
};

export default PostFrom;
