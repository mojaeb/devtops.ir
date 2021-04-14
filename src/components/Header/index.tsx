import * as React from 'react'
import Logo from "./Logo";
import MenuItem, {MenuItemTypes} from "./MenuItem";
import {graphql, useStaticQuery} from "gatsby";
import {RiSearchLine, RiCloseFill} from 'react-icons/ri'
import {Link} from 'gatsby'
import {useSpring, animated} from 'react-spring';
import {useEffect} from "react";

interface IHeaderProps {
}


const Header: React.FC<IHeaderProps> = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(filter: {frontmatter: {type: {eq: "post"}}}) {
                edges {
                    node {
                        frontmatter {
                            title
                            slug
                        }
                    }
                }
            }
            file(name: {eq: "icon"}) {
                childImageSharp {
                    fixed(width: 125) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            allAuthorYaml {
                edges {
                    node {
                        id
                        name
                    }
                }
            }
            allCategoryYaml {
                edges {
                    node {
                        id
                        name
                    }
                }
            }
        }
    `);

    const MENU_ITEMS = [
        {
            name: "خانه",
            to: "/",
            type: MenuItemTypes.link
        },
        {
            name: "دسته بندی",
            type: MenuItemTypes.menuPopper,
            subItems:
                data?.allCategoryYaml?.edges?.map(a => ({
                    name: a.node.name,
                    to: `/category/${a.node.id}`
                })) || []
        },
        {
            name: "نویسنده ها",
            type: MenuItemTypes.menuPopper,
            subItems:
                data?.allAuthorYaml?.edges?.map(a => ({
                    name: a.node.name,
                    to: `/author/${a.node.id}`
                })) || []
        },
        {
            name: "درباره ما",
            to: "/project",
            type: MenuItemTypes.link
        },
    ];

    // search box
    const searchInputRef = React.useRef<HTMLInputElement>(null);
    const [openSearchBox, setOpenSearchBox] = React.useState(false);
    const handleOpenSearchBox = () => {
        if (searchInputRef && searchInputRef.current) {
            searchInputRef.current.focus()
        }
        setOpenSearchBox(true)
    };
    const handleCloseSearchBox = () => {
        setOpenSearchBox(false)
    };
    const searchBoxAnimationProps = useSpring({height: openSearchBox ? 100 : 0});
    const resultSearchAnimationProps = useSpring({opacity: openSearchBox ? 1 : 0});
    const [searchText, setSearchText] = React.useState('');
    const [searchResult, setSearchResult] = React.useState([]);
    const handleChangeSearchText = (e) => setSearchText(e.target.value);

    const searchData = [
        ...data?.allAuthorYaml?.edges.map(({node}) => ({title: node.name, to: `/author/${node.id}`})),
        ...data?.allCategoryYaml?.edges.map(({node}) => ({title: node.name, to: `/category/${node.id}`})),
        ...data?.allMarkdownRemark?.edges.map(({node: {frontmatter}}) => ({title: frontmatter?.title, to: `/${frontmatter?.slug}`})),
    ];

    useEffect(() => {
        if (searchText.length > 1) {
            const result = searchData.filter(s => {
                if (s.title.search(searchText) >= 0) {
                    return s;
                }
            });
            setSearchResult(result)
        } else {
            setSearchResult([])
        }

    }, [searchText]);


    return (
        <nav className={"header-container bg-white sticky top-0 z-50 relative"}>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <Link to={"/"}
                          className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <Logo largeSrc={data.file?.childImageSharp?.fixed}/>
                        <div className={"flex space-x-4 space-x-reverse items-center"}>
                            <p className={"px-6 font-bold text-lg text-gray-600 tracking-widest"}>DEVTOPS</p>
                        </div>
                    </Link>
                    <div className="hidden sm:block sm:mr-6 relative">
                        <div className="flex space-x-4 space-x-reverse items-center">
                            {MENU_ITEMS.map((m, i) => (
                                <MenuItem
                                    key={i}
                                    {...m}
                                />
                            ))}
                            <button
                                onMouseUp={openSearchBox ? handleCloseSearchBox : handleOpenSearchBox}
                                className={"pr-10"}
                            >
                                {openSearchBox ? <RiCloseFill size={23}/> : <RiSearchLine size={23}/>}
                            </button>

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
            <div className={"absolute -bottom-0.5 h-0.5 left-0 right-0 bg-gray-100 linear-progressbar-container"}/>
            <animated.div
                className={"absolute flex flex-col border-t border-b border-gray-100 top-full bg-white left-0 right-0 width-full h-20"}
                style={{...searchBoxAnimationProps}}>
                <div style={{height: 100, overflow: "hidden"}}>
                    <input
                        type={"text"}
                        placeholder={"search"}
                        value={searchText}
                        onChange={handleChangeSearchText}
                        style={{height: '100%', width: '100%'}}
                        className={"px-20 text-2xl text-gray-500"}
                        ref={searchInputRef}
                    />
                </div>
                <animated.div
                    className={"bg-black bg-opacity-70 absolute flex flex-col top-full left-0 right-0"}
                    style={resultSearchAnimationProps}>
                    {searchResult.map((sr, i) => (
                        <Link to={sr.to} className={"px-10 py-3 text-white hover:bg-black"} key={i}>
                            {sr.title}
                        </Link>
                    ))}
                </animated.div>
            </animated.div>

        </nav>
    )
};





export default Header