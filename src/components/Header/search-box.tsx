import * as React from 'react';
import {animated} from "react-spring";
import {Link} from "gatsby";

function SearchBox(
    {
        searchBoxAnimationProps,
        searchText = "",
        onChangeSearchText,
        searchInputRef,
        resultSearchAnimationProps,
        searchResult,
    }
) {
    return (
        <animated.div
            className={"absolute flex flex-col border-t border-b border-gray-100 top-full bg-white left-0 right-0 width-full h-20"}
            style={searchBoxAnimationProps}>
            <div style={{height: 100, overflow: "hidden"}}>
                <input
                    type={"text"}
                    placeholder={"search"}
                    value={searchText}
                    onChange={onChangeSearchText}
                    style={{height: '100%', width: '100%'}}
                    className={"px-20 text-2xl text-gray-500"}
                    ref={searchInputRef}
                />
            </div>
            <animated.div
                className={"bg-black bg-opacity-70 absolute flex flex-col top-full left-0 right-0"}
                style={resultSearchAnimationProps}>
                {searchResult.map((sr, i) => (
                    <Link
                        to={sr.to}
                        className={"px-10 py-3 text-white hover:bg-blue-700"}
                        key={i}
                    >
                        {sr.title}
                    </Link>
                ))}
            </animated.div>
        </animated.div>
    );
}

export default SearchBox;