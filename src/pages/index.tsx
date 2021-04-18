import * as React from 'react'
import {graphql, Link} from "gatsby"
import Layout from "../components/layout";
import Container from "../components/container";
import PostHeader from "../components/post-header";
import PostItems from "../components/post-items";
import SEO from "../components/seo";


export default function IndexPage({data}) {
    const posts = data?.allMarkdownRemark?.edges || [];
    const pinned = data?.markdownRemark || null;
    const totalCount = data?.allMarkdownRemark?.totalCount;
    return (
        <Layout>
            <SEO title={`خانه`} description={"برترین مطالب برای برترین ها"} />
            <Container>
                {pinned && (
                    <PostHeader
                        timeToRead={pinned?.timeToRead}
                        datetime={pinned?.frontmatter?.datetime}
                        author={pinned?.frontmatter?.author}
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
            timeToRead
            frontmatter {
                title
                datetime
                slug
                category {
                    name
                    id
                }
                author {
                    name
                    id
                    image {
                        childImageSharp {
                            fixed(width: 100) {
                                ...GatsbyImageSharpFixed
                            }
                        }
                    }
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
                    timeToRead
                    frontmatter {
                        datetime
                        title
                        category {
                            name
                            id
                        }
                        slug
                        author {
                            name
                            id
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