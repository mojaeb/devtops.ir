import * as React from 'react'
import {graphql} from "gatsby"
import Layout from "../components/Layout";

export default function IndexPage() {
    return (
        <Layout>
            <div className={"container max-auto px-3 bg-gray-100"} style={{height: '100vh'}}>
                <h1 className={"text-gray-800  text-4xl"}> sampe </h1>
            </div>
        </Layout>
    )
}

//
// export const query = graphql`
//     query {
//     }
// `;