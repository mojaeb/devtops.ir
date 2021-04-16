import * as React from 'react';
import Img from "gatsby-image";
import {Link} from "gatsby";


interface IAuthorInfoProps {
    slug?: string;
    fixedImage?: any;
    name: string;
    className?: string;
    hoverClassName?: string
}


const AuthorInfo: React.FC<IAuthorInfoProps> = (
    {
        slug,
        fixedImage,
        name,
        className,
        hoverClassName = "bg-gray-200"
    }
) => {
    return (
        <Link to={`/author/${slug}`} className={`-mr-3 rounded-md px-3 py-3 flex hover:${hoverClassName} flex-direction-row items-center ${className}`}>
            <div className={"bg-blue-400 h-16 w-16 rounded-lg ml-5 overflow-hidden"}>
                <Img fixed={fixedImage} style={{width: '100%', height: '100%'}}/>
            </div>
            <div>
                <p className={"text-sm text-gray-500"}>نویسنده</p>
                <p className={"text-lg"}>{name}</p>
            </div>
        </Link>
    );
}

export default AuthorInfo;