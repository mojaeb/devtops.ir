import * as React from 'react'
import Logo from "./logo";
import menuItemsCreator from "./utils/menu-items-creator";
import useQuery from "./hooks/use-query";
import useSearchBox from "./hooks/use-search-box";
import SearchBox from "./search-box";
import MenuItems from "./menu-items";

const Header = () => {
    const data = useQuery();
    const categories = data?.allCategoryYaml?.edges || [];
    const authors = data?.allAuthorYaml?.edges || [];
    const posts = data?.allMarkdownRemark?.edges || [];

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
                    <Logo largeSrc={data.file?.childImageSharp?.fixed}/>
                    <MenuItems
                        items={menuItems}
                        onToggleSearchBox={onToggleSearchBox}
                        openSearchBox={openSearchBox}
                    />
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