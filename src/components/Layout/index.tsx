import Header from "../Header";
import * as React from "react";
import Footer from './../footer'

export default function Layout({children}) {
    return (
        <div>
            <Header/>
            <div className={"bg-gray-100 min-h-screen"}>
                {children}
            </div>
            <Footer/>
        </div>
    )
}