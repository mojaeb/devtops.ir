import * as React from 'react';
import {Link} from 'gatsby';
import Img from "gatsby-image";

enum variants {
    plain = 'plain',
    link = 'link',
}


interface IPostHeaderProps {
    title?: string;
    variant?: 'plain' | 'link';
    image?: any;
    to?:string;
    // time?: number;
}

const PostHeader: React.FC<IPostHeaderProps> = (
    {
        title,
        variant = variants.plain,
        image,
        to=""
    }
) => {
    return (
        <Link to={to} className={`flex justify-between pt-5 ${variant === variants.link ? 'lined-text' : ''}`}>
            <div className={"w-7/12"}>
                <div className={"block h-96 ml-4 rounded-md overflow-hidden"}>
                    {image && (
                        <Img fluid={image}/>
                    )}
                </div>
            </div>
            <div className={"w-5/12 px-7 flex flex-col"}>
                <p className={"pb-8 pt-4 text-lg text-gray-500"}>جاوااسکریپت</p>
                <p className={`text-4xl font-normal font-medium flex-1`}
                   style={{lineHeight: '3rem'}}>
                    <span>{title}</span>
                </p>
                <p className={"pb-4 pt-4 text-gray-500"}>3 تیر 1399 / 3 دقیقه خواندن</p>
            </div>
        </Link>
    )
};


export default PostHeader;