import * as React from 'react';
import {Link} from 'gatsby';
import Img from "gatsby-image";

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
    author?: string;
    category?: ICategoryProps;
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
        author = "",
        category= {name: "", id: ""}
    }
) => {
    const isLink = variant === variants.link;


    return (
        <Wrapper
            to={to}
            variant={variant}
            className={`flex justify-between pt-5 ${isLink ? 'lined-text' : ''}`}
        >
            <div className={"w-7/12"}>
                <div className={`block h-96 ml-4 rounded-md overflow-hidden`}>
                    {image && (
                        <Img fluid={image}/>
                    )}
                </div>
            </div>
            <div className={"w-5/12 px-7 flex flex-col"}>
                <Link to={`/category/${category.id}`} className={"pb-8 pt-4 text-lg text-gray-500"}>{category.name}</Link>
                <p className={`text-4xl font-normal font-medium flex-1`}
                   style={{lineHeight: '3rem'}}>
                    <span>{title}</span>
                </p>
                <p>نویسنده: {author}</p>
                <div className={"pb-4 pt-4 flex justify-between relative"}>
                    <p className={"text-gray-500"}>3 تیر 1399 / 3 دقیقه خواندن</p>
                    {isLink && (
                        <p className={"mx-auto rounded-md bg-blue-200 text-blue-600 px-6 py-2 absolute bottom-5 left-0"}>مطالعه</p>
                    )}
                </div>
            </div>
        </Wrapper>
    )
};





export default PostHeader;