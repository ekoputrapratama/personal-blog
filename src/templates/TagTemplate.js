import React from 'react';
import { Link, graphql } from 'gatsby';

import Sidebar from '../components/Sidebar';
import SEO from '../components/Seo';
import PostArticle from '../components/PostArticle';

const TagTemplate = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMdx;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tag}"`;
  return (
    <div className="single-tag">
      <SEO title="Home" description={`All posts with tag ${tag}`} />
      <Sidebar>
        <Link to={`/tags`}>All Tags</Link>
      </Sidebar>
      <main className="content animated slide-fadein">
        <h1>{tagHeader}</h1>
        {edges.map(({ node }) => {
          const item = node;
          return (
            <PostArticle
              key={item.id}
              slug={`/posts/${item.slug}`}
              title={item.frontmatter.title}
              excerpt={item.frontmatter.excerpt}
              date={item.frontmatter.date}
            />
          );
        })}
      </main>
    </div>
  );
};

export const pageQuery = graphql`
  query ($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
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

export default TagTemplate;
