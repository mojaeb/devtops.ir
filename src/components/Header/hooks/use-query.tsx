import {graphql, useStaticQuery} from "gatsby";




const useQuery = () => {
    return useStaticQuery(graphql`
        query {
            allMarkdownRemark(filter: {frontmatter: {type: {eq: "post"}}}) {
                edges {
                    node {
                        frontmatter {
                            title
                            slug
                        }
                    }
                }
            }
            file(name: {eq: "icon"}) {
                childImageSharp {
                    fixed(width: 125) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            allAuthorYaml {
                edges {
                    node {
                        id
                        name
                    }
                }
            }
            allCategoryYaml {
                edges {
                    node {
                        id
                        name
                    }
                }
            }
        }
    `);
};


export default useQuery;