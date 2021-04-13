const path = require(`path`);

exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions;
    const result = await graphql(`
    query {
      allMarkdownRemark(filter: {frontmatter: {type: {eq: "post"}}}) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

    result.data['allMarkdownRemark'].edges.forEach(({node}) => {
        createPage({
            path: node.frontmatter.slug,
            component: path.resolve(`./src/templates/post.tsx`),
            context: {
                slug: node.frontmatter.slug,
            },
        })
    })
};