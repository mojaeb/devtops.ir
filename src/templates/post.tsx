import * as React from 'react'
import Layout from "../components/Layout";
import Container from "../components/container";
import PostHeader from "../components/post-header";
import { graphql, Link } from "gatsby"
import Img from "gatsby-image";




export default function Post(props) {
    const post = props?.data?.markdownRemark;
    const title = post?.frontmatter?.title;
    const image = post?.frontmatter?.thumbnail?.childImageSharp.fluid;
    const authorName = post?.frontmatter?.author?.name;
    const category = post?.frontmatter?.category;
    const authorImage = post?.frontmatter?.author?.image?.childImageSharp.fixed;
    const authorId = post?.frontmatter?.author?.id;
    const tags = post?.frontmatter?.tags || [];
    return (
        <Layout>
            <Container className={"pb-5"}>
                <PostHeader
                    author={authorName}
                    title={title}
                    image={image}
                    category={category}
                />
                <br/><br/>
            </Container>
            <div className="bg-white">
                <div className={"mx-auto container w-6/12 pt-20"}>
                    <div
                        className={"leading-8"}
                        dangerouslySetInnerHTML={{__html: post.html}}
                    />
                    <div className={"flex flex-wrap pt-16"}>
                        {tags.map((t, i) => (
                            <div key={i} className={"border-blue-400 ml-3 bg-blue-50 text-blue-500 border-2 rounded-md px-3 py-1"}>
                                {t}
                            </div>
                        ))}
                    </div>
                    <Link to={`/author/${authorId}`} className={"pb-20 pt-10 flex flex-direction-row items-center"}>
                        <div className={"bg-blue-400 h-16 w-16 rounded-full ml-5 overflow-hidden"}>
                            <Img fixed={authorImage} style={{width: '100%', height: '100%'}}/>
                        </div>
                        <div>
                            <p className={"text-sm text-gray-500"}>نویسنده</p>
                            <p className={"text-lg"}>{authorName}</p>
                        </div>
                    </Link>
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                tags
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
    }
`;

