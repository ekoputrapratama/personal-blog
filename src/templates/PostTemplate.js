import React from 'react';
import { Link, graphql } from 'gatsby';
import Moment from 'react-moment';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Sidebar from '../components/Sidebar';
import SEO from '../components/Seo';
import '../pages/style.scss';
// import Layout from "../components/layout";
// import SEO from "../components/seo";

const BlogArticleTemplate = ({ data }) => {
  const {
    body,
    frontmatter: { title, excerpt, date, featuredimage, tags },
  } = data.mdx;
  return (
    <div className="post-detail">
      <SEO title={`Posts | ${title}`} description={excerpt} />
      <Sidebar>
        <Link to={`/`}>Home</Link>
        <Link to={`/privacy-policy`}>Privacy Policy</Link>
        <Link to={`/tags`}>All Tags</Link>
      </Sidebar>
      <main className="content animated slide-fadein">
        <h1 className="title">{title}</h1>
        <span className="publish-date">
          <Moment date={date} format="LLL" />
        </span>
        <img
          alt={title}
          className="featured-img"
          src={featuredimage.publicURL}
        />
        <article className="post-content">
          <MDXRenderer>{body}</MDXRenderer>
        </article>

        <div className="post-tags">
          {tags.map((tag) => {
            return (
              <span key={tag} className="tag">
                {tag}
              </span>
            );
          })}
        </div>
      </main>
      {/* <SEO title={`News | ${title}`} description={excerpt} /> */}
    </div>
  );
};

export const query = graphql`
  query BlogArticle($slug: String!) {
    mdx(slug: { eq: $slug }) {
      body
      excerpt(pruneLength: 160)
      frontmatter {
        title
        featuredimage {
          publicURL
        }
        date
        tags
      }
    }
  }
`;

export default BlogArticleTemplate;
