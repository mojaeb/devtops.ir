import * as React from 'react'
import Layout from "../components/layout";
import {graphql} from "gatsby";
import PostItems from "../components/post-items";
import Container from "../components/container";

export default function RelatedCategoryPosts({data}) {
    const posts = data?.allMarkdownRemark?.edges || [];
    const name = data?.categoryYaml?.name;
    return (
        <Layout>
            <div className={"bg-white"}>
                <Container className={"flex flex-direction-row"} style={{paddingTop: '2rem', paddingBottom: "2rem"}}>
                    <div className={"text-md flex items-center"}>
                        <p className={"text-gray-500"}>مطالب مرتبط با دسته بندی</p>
                        <span className={"rounded-md px-4 mx-5 py-0.5 bg-blue-200 text-blue-600"}>
                            {name}
                        </span>
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
        allMarkdownRemark(filter: {frontmatter: {type: {eq: "post"}, category: {id: {eq: $slug}}}}) {
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
        categoryYaml(id: {eq: $slug}) {
            name
            id
        }
    }
`;

