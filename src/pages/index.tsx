import * as React from 'react'
import {graphql} from "gatsby"
import Layout from "../components/Layout";


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
            <div className={"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 pt-10 min-h-screen"}>
                {/*header post*/}
                <div className={"flex justify-between"}>
                    <div className={"w-7/12"}>
                        <div className={"block h-96 bg-blue-200 ml-4 rounded-md"}>

                        </div>
                    </div>
                    <div className={"w-5/12 px-5 flex flex-col"}>
                        <p className={"pb-8 pt-4 text-lg text-gray-500"}>جاوااسکریپت</p>
                        <p className={`text-4xl font-normal font-medium flex-1 heading-text header-title`} style={{lineHeight: '3rem' }}>
                            <span>{firstPost.title}</span>
                        </p>
                        <p className={"pb-4 pt-4 text-gray-500"}>3 تیر 1399 / 3 دقیقه خواندن</p>
                    </div>
                </div>
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
            </div>
        </Layout>
    )
}

//
// export const query = graphql`
//     query {
//     }
// `;