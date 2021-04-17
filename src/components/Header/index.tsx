import * as React from 'react'
import Logo from "./logo";
import menuItemsCreator from "./utils/menu-items-creator";
import useQuery from "./hooks/use-query";
import useSearchBox from "./hooks/use-search-box";
import SearchBox from "./search-box";
import MenuItems from "./menu-items";
import {MenuItemTypes} from "./menu-item";
import {Link} from "gatsby";
import {RiMenu3Line} from  "react-icons/ri"

const useMenu = () => {
    const [state, setState] = React.useState(false);
    const handleToggleMenu = (_event: MouseEvent) :void => {
        setState(!state)
    };
    return [state, handleToggleMenu]
};



const Header = () => {
    const data = useQuery();
    const categories = data?.allCategoryYaml?.edges || [];
    const authors = data?.allAuthorYaml?.edges || [];
    const posts = data?.allMarkdownRemark?.edges || [];
    const [openMenuStatus, setToggleMenu] = useMenu();
    const menuItems = menuItemsCreator(authors, categories);

    const {
        onChangeSearchText,
        onToggleSearchBox,
        resultSearchAnimationProps,
        searchBoxAnimationProps,
        searchResult,
        openSearchBox,
        searchInputRef,
        searchText,
    } = useSearchBox({
        authors,
        categories,
        posts
    });

    return (
        <nav className={"header-container bg-white sticky top-0 z-50 relative"}>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <button className={"pl-5 block sm:hidden"} onClick={setToggleMenu}><RiMenu3Line size={30}/></button>
                    <Logo largeSrc={data.file?.childImageSharp?.fixed}/>
                    <MenuItems
                        items={menuItems}
                        onToggleSearchBox={onToggleSearchBox}
                        openSearchBox={openSearchBox}
                    />

                    {openMenuStatus && (
                        <div className={"fixed z-50"}>
                            <div onClick={setToggleMenu} className={"bg-black fixed inset-0 z-50 k bg-opacity-70 block sm:hidden"}/>
                            <div className={"bg-white pt-5 top-0 w-9/12 right-0 bottom-0 fixed z-50 sm:hidden"}>
                                <div className={"mx-5"}><Logo largeSrc={data.file?.childImageSharp?.fixed}/></div>
                                <br/>
                                <div className={"px-7 py-3"}>
                                    {menuItems.map(({name, to, type, subItems}, i) => {
                                        if (type === MenuItemTypes.link) {
                                            return (
                                                <Link key={i} className={"my-4 mx-1 block"} to={to}>{name}</Link>
                                            )
                                        }
                                        return (
                                            <div  className={"my-4 mx-1 block"}>
                                                {name}
                                                {subItems && subItems.map(({name: subName, to: subTo}, si) => (
                                                    <Link key={si} className={"my-4 mr-7 block"} to={subTo}>{subName}</Link>
                                                ))}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    )}


                </div>
            </div>
            <SearchBox
                searchText={searchText}
                onChangeSearchText={onChangeSearchText}
                resultSearchAnimationProps={resultSearchAnimationProps}
                searchBoxAnimationProps={searchBoxAnimationProps}
                searchInputRef={searchInputRef}
                searchResult={searchResult}
            />

        </nav>
    )
};


export default Header