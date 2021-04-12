import * as React from 'react'
import Layout from "../components/Layout";
import Container from "../components/container";
import PostHeader from "../components/post-header";
import { graphql } from "gatsby"


const TAGS = [
    {name: "javascript", slug: "javascript"},
    {name: "react", slug: "react"},
    {name: "react", slug: "react"},
];

export default function Post(props) {
    const post = props?.data?.markdownRemark;
    const title = post?.frontmatter?.title;
    const image = post?.frontmatter?.thumbnail?.childImageSharp.fluid;
    // const post = data.markdownRemark;
    return (
        <Layout>
            <Container className={"pb-5"}>
                <PostHeader title={title} image={image}/>
                <br/><br/>
            </Container>
            <div className="bg-white">
                <div className={"mx-auto container w-6/12 pt-20"}>
                    <div
                        className={"leading-8"}
                        dangerouslySetInnerHTML={{__html: post.html}}
                    />
                    <div className={"flex flex-wrap pt-16"}>
                        {TAGS.map((t, i) => (
                            <div key={i} className={"border-blue-400 ml-3 bg-blue-50 text-blue-500 border-2 rounded-md px-3 py-1"}>
                                {t.name}
                            </div>
                        ))}
                    </div>
                    <div className={"pb-20 pt-10 flex flex-direction-row items-center"}>
                        <div className={"bg-blue-400 h-14 w-14 rounded-full ml-5"}> </div>
                        <div>
                            <p className={"text-sm text-gray-500"}>نویسنده</p>
                            <p className={"text-lg"}>محمدجعفر ابراهیمی</p>
                        </div>
                    </div>
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
`

