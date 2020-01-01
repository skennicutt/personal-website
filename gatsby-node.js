const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve) => {
    const blogPostTemplate = path.resolve('src/templates/BlogPost.tsx');
    // Query for markdown nodes to use in creating pages.
    resolve(
      graphql(
        `
        query {
          allMarkdownRemark(
            sort: { order: ASC, fields: [frontmatter___date] }
          ) {
            edges {
              node {
                frontmatter {
                  path
                  title
                  tags
                }
              }
            }
          }
        }`,
      ).then((result) => {
        const posts = result.data.allMarkdownRemark.edges;

        posts.forEach(({ node }, index) => {
          // eslint-disable-next-line no-shadow
          const { path } = node.frontmatter;
          createPage({
            path,
            component: blogPostTemplate,
            context: {
              pathSlug: path,
              prev: index === 0 ? null : posts[index - 1].node,
              next: index === posts.length - 1 ? null : posts[index + 1].node,
            },
          });
          resolve();
        });
      }),
    );
  });
};
