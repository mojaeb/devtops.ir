import * as React from 'react'
import Layout from "../components/layout";
import {graphql} from "gatsby";
import PostItems from "../components/post-items";
import Container from "../components/container";
import Img from 'gatsby-image'
import SEO from "../components/seo";

export default function Posts({data}) {
    const posts = data?.allMarkdownRemark?.edges || [];
    const name = data?.authorYaml?.name;
    const bio = data?.authorYaml?.bio;
    const image = data?.authorYaml?.image?.childImageSharp.fixed;
    return (
        <Layout>
            <SEO title={`مطالب ${name}`} />
            <div className={"bg-white"}>
                <Container className={"flex flex-wrap md:justify-start justify-center lg:px-32 px-10 py-10 pt-10"}>
                    <div className={"w-32 h-32 bg-blue-500 rounded-md overflow-hidden"}>
                        <Img fixed={image} style={{width: '100%', height: '100%'}}/>
                    </div>
                    <div className={"px-0 sm:px-10 py-5 flex flex-col md:items-start items-center"}>
                        <p className={"text-md"}>{name}</p>
                        <div>
                            <p className={"text-sm text-gray-400 pt-3 lg:w-8/12 text-center sm:text-right"}>{bio}</p>
                        </div>
                    </div>
                </Container>
            </div>

            <Container className={"pb-20"}>
                <PostItems posts={posts}/>
            </Container>
        </Layout>
    )
}


export const query = graphql`
    query ($slug: String!){
        allMarkdownRemark(filter: {frontmatter: {type: {eq: "post"}, author: {id: {eq: $slug}}}}) {
            totalCount
            edges {
                node {
                    timeToRead
                    frontmatter {
                        category {
                            name
                            id
                        }
                        datetime
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
        authorYaml(id: {eq: $slug}) {
            name
            id
            bio
            image {
                childImageSharp {
                    fixed(width: 200) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    }
`;

