import * as React from 'react'
import {graphql} from "gatsby"
import Layout from "../components/Layout";
import Container from "../components/container";
import PostHeader from "../components/post-header";
import PostItem from '../components/post-item';



export default function IndexPage({data}) {
    const posts = data?.allMarkdownRemark?.edges || [];
    const pinned = data?.markdownRemark || null;
    return (
        <Layout>
            <Container>
                {pinned && (
                    <PostHeader
                        to={`/${pinned.frontmatter?.slug}`}
                        title={pinned.frontmatter?.title}
                        image={pinned.frontmatter?.thumbnail?.childImageSharp.fluid}
                        variant={"link"}
                    />
                )}
                <div className={"grid grid-cols-3 gap-x-10 gap-y-16 mt-20 pb-32"}>
                    {posts.map(({node: {frontmatter: {title, category, thumbnail, slug = ''}}}, i) => {
                        return (
                            <PostItem
                                to={`/${slug}`}
                                key={i}
                                category={category}
                                title={title}
                                image={thumbnail?.childImageSharp?.fixed}
                            />
                        )
                    })}
                </div>
            </Container>
        </Layout>
    )
}


export const query = graphql`
    query {
        markdownRemark(frontmatter: {pinned: {eq: true}}) {
            frontmatter {
                category
                title
                slug
                thumbnail {
                    childImageSharp {
                        fluid{
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
        allMarkdownRemark(filter: {frontmatter: {type: {eq: "post"}}}) {
            edges {
                node {
                    frontmatter {
                        category
                        title
                        slug
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
`;