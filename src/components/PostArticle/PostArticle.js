import React from 'react';
import { Link } from 'gatsby';
import Moment from 'react-moment';
import './PostArticle.scss';

function PostArticle({ title, excerpt, slug, date }) {
  return (
    <div className="PostArticle">
      <h3 className="title">{title}</h3>
      <span className="publish-date">
        <Moment date={date} format="D MMMM yyyy" />
      </span>
      <p>{excerpt}</p>
      <Link to={`${slug}`}>Read more...</Link>
    </div>
  );
}

export default PostArticle;
