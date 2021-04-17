import * as React from 'react';
import Img from "gatsby-image";
import {Link} from "gatsby";

interface ILogoProps {
    largeSrc?: any,
    smallSrc?: any,
    alt?: string | null | undefined,
}

const Logo: React.FC<ILogoProps> = (
    {
        alt = "",
        largeSrc,
    }) => {
    return (
        <Link to={"/"}
              className="flex-1 flex items-center  sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center h-10 w-14">
                <Img
                    fixed={largeSrc}
                    alt={alt}
                    style={{
                        height: '100%',
                    }}
                    imgStyle={{
                        objectFit: 'contain',
                    }}
                />
            </div>
            <div className={"flex space-x-4 space-x-reverse items-center"}>
                <p className={"px-6 font-bold text-lg text-gray-600 tracking-widest"}>DEVTOPS</p>
            </div>
        </Link>
    );
};


export default Logo;