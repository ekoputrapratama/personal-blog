import React from "react"
import { graphql, useStaticQuery } from "gatsby";

import Sidebar from '../components/Sidebar';
import './style.scss'

const postsQuery = graphql`
  query {
    allMdx {
      edges {
        node {
          id
          slug
          frontmatter {
            title
            excerpt
            featuredimage
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
  return (
    <div className="home">
      <Sidebar />
      <main className="content">
        
      </main>
    </div>
  )
}

export default IndexPage
