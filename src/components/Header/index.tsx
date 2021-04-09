import * as React from 'react'
import Logo from "./Logo";
import MenuItem from "./MenuItem";
import {graphql, useStaticQuery} from "gatsby";
// import {GatsbyImageProps} from 'gatsby-image'


const MENU_ITEMS = [
    {name: "home", url: "/"},
    {name: "categories", url: "/categories"},
    {name: "authors", url: "/authors"},
    {name: "about us", url: "/project"},
];

interface IHeaderProps {}


const Header: React.FC<IHeaderProps> = () => {
    const data = useStaticQuery(graphql`
        query {
            file(id: { eq: "dbde1a11-c1f9-52c1-b046-8dd7c1e27e24" }) {
                childImageSharp {
                    fixed(width: 125) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `);
    return (
        <nav
            // className="shadow-md"
        >
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <Logo largeSrc={data.file?.childImageSharp?.fixed}/>
                        <div className="hidden sm:block sm:mr-6">
                            <div className="flex space-x-4 space-x-reverse">
                                {MENU_ITEMS.map((m, i) => (
                                    <MenuItem
                                        key={i}
                                        name={m.name}
                                        to={m.url}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sm:hidden" id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <MenuItem
                        name={"ds"}
                        to={"#"}
                        textType={"text-base"}
                        display={"block"}
                    />
                </div>
            </div>
        </nav>
    )
}

export default Header