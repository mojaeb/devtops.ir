import * as React from 'react'
import Layout from "../components/layout";
import Container from "../components/container";
import PostHeader from "../components/post-header";
import { graphql, Link } from "gatsby"
import Img from "gatsby-image";
import AuthorInfo from "../components/author-info";
import Tags from "../components/tags";
import SEO from "../components/seo";




export default function Post(props) {
    const post = props?.data?.markdownRemark;
    const title = post?.frontmatter?.title;
    const description = post?.frontmatter?.description;
    const image = post?.frontmatter?.thumbnail?.childImageSharp.fluid;
    const author = post?.frontmatter?.author;
    const authorName = post?.frontmatter?.author?.name;
    const category = post?.frontmatter?.category;
    const authorImage = post?.frontmatter?.author?.image?.childImageSharp.fixed;
    const authorId = post?.frontmatter?.author?.id;
    const tags = post?.frontmatter?.tags || [];
    const timeToRead = post?.timeToRead || [];
    const datetime = post?.frontmatter?.datetime || "";
    return (
        <Layout>
            <SEO title={title} image={image?.src} article={true} description={description}/>
            <Container className={"sm:pb-5"}>
                <PostHeader
                    author={author}
                    title={title}
                    image={image}
                    category={category}
                    timeToRead={timeToRead}
                    datetime={datetime}
                />
                <br/>
                <br/>
            </Container>
            <div className="bg-white">
                <div className={"mx-auto container w-full lg:w-6/12 px-7 md:px-0 pt-20"}>
                    <section
                        className={"leading-relaxed text-md sm:text-lg main-text"}
                        dangerouslySetInnerHTML={{__html: post.html}}
                    />
                    <Tags tags={tags}/>
                    <AuthorInfo
                        name={authorName}
                        fixedImage={authorImage}
                        slug={authorId}
                        hoverClassName={"bg-gray-100"}
                        className={"mt-10 mb-10"}
                    />
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            timeToRead
            frontmatter {
                title
                tags
                description
                datetime
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

