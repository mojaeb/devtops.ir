import Header from "../Header";
import * as React from "react";
import Footer from './../footer'

export default function Layout({children}) {
    return (
        <div>
            <Header/>
            <div className={"px-3 bg-gray-100 pb-32 min-h-screen"}>
                {children}
            </div>
            <Footer/>
        </div>
    )
}