import React from 'react';
import kebabCase from 'lodash/kebabCase';
import { graphql, useStaticQuery, Link } from 'gatsby';

import Sidebar from '../components/Sidebar';
import SEO from '../components/Seo';
import './style.scss';

function Tags({
  data: {
    allMdx: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) {
  return (
    <div className="tags">
      <SEO title="Tags" description="All Tags" />
      <Sidebar>
        <Link to={`/`}>Home</Link>
        <Link to={`/privacy-policy`}>Privacy Policy</Link>
      </Sidebar>
      <main className="content animated slide-fadein">
        <h1>All Tags</h1>
        <ul>
          {group.map((tag) => (
            <li key={tag.fieldValue}>
              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;

export default Tags;
