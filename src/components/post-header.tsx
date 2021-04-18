import * as React from 'react';
import {Link} from 'gatsby';
import Img from "gatsby-image";
import AuthorInfo from "./author-info";
// @ts-ignore
import * as Styles from '../styles/post-header.module.css';

enum variants {
    plain = 'plain',
    link = 'link',
}


interface ICategoryProps {
    name: string;
    id: string;
}

interface IPostHeaderProps {
    title?: string;
    variant?: 'plain' | 'link';
    image?: any;
    to?:string;
    author?: any;
    category?: ICategoryProps;
    timeToRead?: number;
    datetime?: string | null;
    // time?: number;
}


const Wrapper = ({variant, children, to, className}) => {
    if (variant === variants.link) {
        return (
            <div>
                <Link to={to} className={className}>
                    {children}
                </Link>
            </div>
        )
    }
    return (
        <div className={className}>
            {children}
        </div>
    )
};

const PostHeader: React.FC<IPostHeaderProps> = (
    {
        title,
        variant = variants.plain,
        image,
        to="",
        author,
        category= {name: "", id: ""},
        timeToRead = null,
        datetime,
    }
) => {
    const isLink = variant === variants.link;


    return (
        <Wrapper
            to={to}
            variant={variant}
            className={`flex md:flex-row flex-col justify-between sm:pt-5 ${isLink ? 'lined-text' : ''}`}
        >
            <div className={"w-full md:w-7/12 px-2 sm:px-3 sm:p-0"}>
                <div className={`block h-52 sm:h-96 ml-4 w-full rounded-md overflow-hidden`}>
                    {image && (
                        <Img style={{height: '100%'}} fluid={image}/>
                    )}
                </div>
            </div>
            <div className={"w-full md:w-5/12 px-5 sm:px-7 flex flex-col"}>
                <Link
                    to={`/category/${category.id}`}
                    className={"mb-2 py-2 hover:text-blue-600 rounded-md sm:px-3 hover:bg-gray-200 lg:mb-5 sm:text-lg text-gray-600"}>
                    {category.name}
                </Link>
                <div className={"flex-1 relative"}>
                    <div className={`text-xl sm:text-3xl lg:text-4xl font-normal font-medium ellipsis-multi-line-text ${Styles.headerTitleText}`}>
                        <span>{title}</span>
                    </div>
                </div>
                <div className={"flex flex-col justify-end"}>
                    <AuthorInfo
                        slug={author.id}
                        fixedImage={author?.image?.childImageSharp.fixed}
                        name={author.name}
                        size={"sm"}
                        className={"my-2"}
                    />
                    <div className={"flex justify-between items-end text-sm sm:text-md"}>
                        <p className={"text-gray-500"}>{datetime}  / {timeToRead} دقیقه خواندن</p>
                        {isLink && (
                            <p className={"rounded-md bg-blue-200 text-xs sm:text-md text-blue-600 px-6 py-2"}>مطالعه</p>
                        )}
                    </div>
                </div>
            </div>
        </Wrapper>
    )
};





export default PostHeader;