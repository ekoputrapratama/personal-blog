import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

import Sidebar from '../components/Sidebar';
import PostArticle from '../components/PostArticle';
import SEO from '../components/Seo';
import './style.scss';

const postsQuery = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          slug
          frontmatter {
            title
            excerpt
            date
          }
        }
      }
    }
  }
`;
// markup
const IndexPage = () => {
  const data = useStaticQuery(postsQuery);
  const posts = data.allMdx.edges;
  return (
    <div className="home">
      <SEO title="Home" description="My notes about programming" />
      <Sidebar>
        <Link to={`/tags`}>All Tags</Link>
        <Link to={`/privacy-policy`}>Privacy Policy</Link>
      </Sidebar>
      <main className="content animated slide-fadein">
        {posts.map(({ node: item }) => (
          <PostArticle
            key={item.id}
            slug={`/posts/${item.slug}`}
            title={item.frontmatter.title}
            excerpt={item.frontmatter.excerpt}
            date={item.frontmatter.date}
          />
        ))}
      </main>
    </div>
  );
};

export default IndexPage;
