import * as React from 'react'
import Layout from "../components/Layout";
import PostItems from "../components/post-items";
import {graphql, useStaticQuery} from "gatsby";
import Container from "../components/container";


export default function Posts() {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(filter: {frontmatter: {type: {eq: "post"}}}) {
                totalCount
                edges {
                    node {
                        frontmatter {
                            title
                            slug
                            author {
                                bio
                                name
                            }
                            thumbnail {
                                childImageSharp {
                                    fixed(width: 300){
                                        ...GatsbyImageSharpFixed
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `);
    return (
        <Layout>
            <Container className={"pb-20"}>
                <PostItems posts={data?.allMarkdownRemark?.edges || []}/>
            </Container>
        </Layout>
    )
}