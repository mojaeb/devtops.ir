import Header from "../Header";
import * as React from "react";

export default function Layout({children}) {
    return (
        <div>
            <Header/>
            <div className={"px-3 bg-gray-100"}>
                {children}
            </div>
        </div>
    )
}