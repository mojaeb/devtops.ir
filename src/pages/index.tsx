import * as React from 'react'
import {graphql} from "gatsby"
import Layout from "../components/layout";
import Container from "../components/container";
import PostHeader from "../components/post-header";
import PostItem from '../components/post-item';
import {Link} from 'gatsby';
import PostItems from "../components/post-items";



export default function IndexPage({data}) {
    const posts = data?.allMarkdownRemark?.edges || [];
    const pinned = data?.markdownRemark || null;
    const totalCount = data?.allMarkdownRemark?.totalCount;
    console.log(posts, pinned, data.allMarkdownRemark.totalCount);
    return (
        <Layout>
            <Container>
                {pinned && (
                    <PostHeader
                        author={pinned?.frontmatter?.author?.name}
                        to={`/${pinned.frontmatter?.slug}`}
                        title={pinned.frontmatter?.title}
                        image={pinned.frontmatter?.thumbnail?.childImageSharp.fluid}
                        variant={"link"}
                        category={pinned?.frontmatter?.category}
                    />
                )}
                <PostItems posts={posts}/>
                {totalCount >= 6 && (
                    <div className={"py-20 flex items-center"}>
                        <Link to={"/posts"} className={"mx-auto rounded-md bg-blue-200 text-blue-600 px-8 py-3"}>
                            همه مطالب
                        </Link>
                    </div>
                )}

            </Container>
        </Layout>
    )
}


export const query = graphql`
    query {
        markdownRemark(frontmatter: {pinned: {eq: true}}) {
            frontmatter {
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
                        fluid{
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
        allMarkdownRemark(limit: 6, filter: {frontmatter: {type: {eq: "post"}}}) {
            totalCount
            edges {
                node {
                    frontmatter {
                        title
                        category {
                            name
                            id
                        }
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
`;