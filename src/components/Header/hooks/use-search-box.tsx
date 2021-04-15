import * as React from "react";
import {useSpring} from "react-spring";


const useSearchBox = ({authors = [], categories = [], posts = []}) => {
    const searchInputRef = React.useRef<HTMLInputElement>(null);
    const [openSearchBox, setOpenSearchBox] = React.useState(false);
    const handleToggleSearchBox = () => {
        if (searchInputRef && searchInputRef.current) searchInputRef.current.focus();
        setOpenSearchBox(!openSearchBox)
    };
    const searchBoxAnimationProps = useSpring({height: openSearchBox ? 100 : 0});
    const resultSearchAnimationProps = useSpring({opacity: openSearchBox ? 1 : 0});
    const [searchText, setSearchText] = React.useState('');
    const [searchResult, setSearchResult] = React.useState([]);
    const handleChangeSearchText = (e) => setSearchText(e.target.value);

    const searchData = [
        ...authors.map(({node}) => ({title: node.name, to: `/author/${node.id}`})),
        ...categories.map(({node}) => ({title: node.name, to: `/category/${node.id}`})),
        ...posts.map(({node: {frontmatter}}) => ({
            title: frontmatter?.title,
            to: `/${frontmatter?.slug}`
        })),
    ];

    React.useEffect(() => {
        if (searchText && searchText.length > 1) {
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

    return {
        searchResult,
        searchBoxAnimationProps,
        resultSearchAnimationProps,
        openSearchBox,
        searchText,
        searchInputRef,
        onChangeSearchText: handleChangeSearchText,
        onToggleSearchBox: handleToggleSearchBox,
    }
};


export default useSearchBox;