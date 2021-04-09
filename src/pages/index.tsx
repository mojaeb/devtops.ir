import * as React from 'react'
import {graphql} from "gatsby"
import Header from '../components/Header'

export default function IndexPage({ data }) {
    return (
        <div>
            <Header data={data}/>
            <div className={"container max-auto px-3"}>
                <h1 className={"text-gray-800 mt-3 text-4xl"}> sampe </h1>
            </div>
        </div>
    )
}


export const query = graphql`
    query {
        file(id: { eq: "dbde1a11-c1f9-52c1-b046-8dd7c1e27e24" }) {
            childImageSharp {
                fixed(width: 125) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`;