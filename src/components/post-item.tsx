import * as React from 'react';
import {Link} from 'gatsby';
import Img from "gatsby-image";


interface IPostItemProps {
    title?: string;
    category?: string;
    image?: any;
    to?:string;
}


// TODO add publish date and read time properties
const PostItem: React.FC<IPostItemProps> = (
    { title="", category="", to="", image}
) => {
    return (
        <Link to={to} className={"lined-text"}>
            <div className={"bg-blue-200 h-52 rounded-md overflow-hidden"}>
                <Img style={{width: '100%', height: '100%'}} fixed={image}/>
            </div>
            <div className={"w-11/12 mx-auto"}>
                <p className={"mt-3 text-md text-gray-500"}>{category}</p>
                <p className={"mt-3 text-xl text-animated-bg-line"}>
                    <span>{title}</span>
                </p>
                <p className={"mt-4 text-xs text-gray-500"}>3 تیر 1399 / 3 دقیقه خواندن</p>
            </div>
        </Link>
    )
};

export default PostItem;