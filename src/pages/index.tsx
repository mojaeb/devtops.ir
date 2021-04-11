import * as React from 'react'
import {graphql} from "gatsby"
import Layout from "../components/Layout";
import Container from "../components/container";
import PostHeader from "../components/PostHeader";


const POSTS = [
    {
        title: "طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی استفاده می نماید.",
        category: "جاوااسکریپت"
    },
    {
        title: "طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی استفاده می نماید.",
        category: "جاوااسکریپت"
    },
    {
        title: "طراح گرافیک از این متن به عنوان عنصری ",
        category: "جاوااسکریپت"
    },
    {
        title: "طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی استفاده می نماید.",
        category: "جاوااسکریپت"
    }
];


export default function IndexPage() {
    const firstPost = POSTS[0];
    return (
        <Layout>
            <Container>
                {/*header post*/}
                <PostHeader title={firstPost.title}/>
                <div className={"grid grid-cols-3 gap-10 mt-20"}>
                    {POSTS.map((p, i) => {
                        return (
                            <div key={i}>
                                <div className={"bg-blue-200 h-52 rounded-md"}> </div>
                                <div className={"w-11/12 mx-auto"}>
                                    <p className={"mt-3 text-md text-gray-500"}>{p.category}</p>
                                    <p className={"mt-3 text-xl"}>{p.title}</p>
                                    <p className={"mt-4 text-xs text-gray-500"}>3 تیر 1399 / 3 دقیقه خواندن</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </Container>
        </Layout>
    )
}

//
// export const query = graphql`
//     query {
//     }
// `;