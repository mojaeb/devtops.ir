import * as React from 'react'
import {Link} from "gatsby"
import SEO from "../components/seo";

export default function NotFoundPage() {
    return (
        <div className={"h-screen flex items-center flex-col sm:flex-row justify-center gap-10 flex-wrap"}>
            <SEO title={`خطا چیزی پیدا نشد`} />
            <p className={"text-blue-600 text-8xl"}>404</p>
            <div>
                <p className={"text-gray-600 text-2xl pb-3"}>چیزی پیدا نشد !</p>
                <Link to={"/"} className={"text-blue-600 text-xl"}>برگشت به خانه</Link>
            </div>
        </div>
    )
}