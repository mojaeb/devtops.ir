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
      allAuthorYaml {
        edges {
          node {
            id
          }
        }
      }
      allCategoryYaml {
        edges {
          node {
            id
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
        });
    });
    result.data['allAuthorYaml'].edges.forEach(({node}) => {
        createPage({
            path: `author/${node.id}`,
            component: path.resolve(`./src/templates/author.tsx`),
            context: {
                slug: node.id,
            },
        });
    });
    result.data['allCategoryYaml'].edges.forEach(({node}) => {
        createPage({
            path: `category/${node.id}`,
            component: path.resolve(`./src/templates/category.tsx`),
            context: {
                slug: node.id,
            },
        });
    })
};
