import * as React from 'react'
import Layout from "../components/Layout";
import {graphql} from "gatsby";
import PostItems from "../components/post-items";
import Container from "../components/container";
import Img from 'gatsby-image'

export default function Posts({data}) {
    const posts = data?.allMarkdownRemark?.edges || [];
    const name = data?.authorYaml?.name;
    const bio = data?.authorYaml?.bio;
    const image = data?.authorYaml?.image?.childImageSharp.fixed;
    return (
        <Layout>
    <div className={"bg-white"}>
        <Container className={"flex flex-direction-row px-32 py-10"}>
            <div className={"w-32 h-32 bg-blue-500 rounded-md overflow-hidden"}>
                <Img fixed={image} style={{width: '100%', height: '100%'}}/>
            </div>
            <div className={"px-10 py-5"}>
                <p className={"text-md"}>{name}</p>
                <div className={"flex flex-direction-row items-center justify-between"}>
                    <p className={"text-sm text-gray-400 pt-3 w-8/12"}>{bio}</p>
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

