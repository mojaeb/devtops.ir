import * as React from 'react';
import Img from "gatsby-image";
import {Link} from "gatsby";


enum Size {
    md = "md",
    sm = "sm",
}

interface IAuthorInfoProps {
    slug?: string;
    fixedImage?: any;
    name: string;
    className?: string;
    hoverClassName?: string;
    size?: 'md' | 'sm';
}


const AuthorInfo: React.FC<IAuthorInfoProps> = (
    {
        slug,
        fixedImage,
        name,
        className,
        hoverClassName = "bg-gray-200",
        size = Size.md,
    }
) => {
    return (
        <Link to={`/author/${slug}`} className={`-mr-3 rounded-md px-3 ${size === Size.md ? "py-3" : "sm:py-3"} flex hover:${hoverClassName} flex-direction-row items-center ${className}`}>
            <div className={`bg-blue-400 ${size === Size.md ? "h-16 w-16" : "h-10 w-10 sm:h-16 sm:w-16"} rounded-lg ml-5 overflow-hidden`}>
                <Img fixed={fixedImage} style={{width: '100%', height: '100%'}}/>
            </div>
            <div>
                <p className={`${size === Size.md ? "text-sm" : "text-xs"} text-gray-500`}>نویسنده</p>
                <p className={size === Size.md ? "text-lg" : "text-md"}>{name}</p>
            </div>
        </Link>
    );
}

export default AuthorInfo;