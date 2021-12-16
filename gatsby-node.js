/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
const path = require('path');
const _ = require('lodash');
// Create pages for our news entry on gatsby build. This is called once
// the data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      postsRemark: allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            slug
          }
        }
      }
      tagsGroup: allMdx(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `);
  // handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  // create pages for each news article
  const blogArticleTemplate = path.resolve(`src/templates/PostTemplate.js`);
  const tagTemplate = path.resolve('src/templates/TagTemplate.js');

  const posts = result.data.postsRemark.edges;

  posts.forEach(({ node }) => {
    createPage({
      path: `posts/${node.slug}`,
      component: blogArticleTemplate,
      context: {
        // pass down slug as context
        slug: node.slug,
      },
    });
  });

  const tags = result.data.tagsGroup.group;
  // Make tag pages
  tags.forEach((tag) => {
    createPage({
      path: `tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    });
  });
};
