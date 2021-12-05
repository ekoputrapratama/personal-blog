/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
 const path = require("path");
 // Create pages for our news entry on gatsby build. This is called once
 // the data layer is bootstrapped to let plugins create pages from data.
 exports.createPages = async ({ graphql, actions, reporter }) => {
   const { createPage } = actions;
   const postsQuery = await graphql(`
     {
       allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
         edges {
           node {
             slug
           }
         }
       }
     }
   `);
   // handle errors
   if (postsQuery.errors) {
     reporter.panicOnBuild(`Error while running GraphQL query.`);
     return;
   }
   // create pages for each news article
   const blogArticleTemplate = path.resolve(
     `src/templates/PostTemplate.js`
   );
   postsQuery.data.allMdx.edges.forEach(({ node }) => {
     createPage({
       path: `posts/${node.slug}`,
       component: blogArticleTemplate,
       context: {
         // pass down slug as context
         slug: node.slug,
       },
     });
   });
 };
 