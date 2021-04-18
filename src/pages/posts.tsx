import * as React from 'react'
import Layout from "../components/layout";
import PostItems from "../components/post-items";
import {graphql, useStaticQuery} from "gatsby";
import Container from "../components/container";
import SEO from "../components/seo";


export default function Posts() {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(filter: {frontmatter: {type: {eq: "post"}}}) {
                totalCount
                edges {
                    node {
                        timeToRead
                        frontmatter {
                            datetime
                            title
                            slug
                            category {
                                name
                                id
                            }
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
            <SEO title={`همه مطالب`} />
            <Container className={"pb-20"}>
                <PostItems posts={data?.allMarkdownRemark?.edges || []}/>
            </Container>
        </Layout>
    )
}