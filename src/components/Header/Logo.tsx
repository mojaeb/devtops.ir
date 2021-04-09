import * as React from 'react';
import Img, {GatsbyImageProps} from "gatsby-image";

interface ILogoProps {
    largeSrc?: any,
    smallSrc?: any,
    alt?: string,
}

const Logo: React.FC<ILogoProps> = (
    {
        alt = "",
        largeSrc,
        smallSrc
    }) => {
    return (
        <div
            className="flex-shrink-0 flex items-center h-9"
        >
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
            {/*<Img fixed={largeSrc}*/}
            {/*     objectFit="cover"*/}
            {/*     objectPosition="50% 50%"*/}
            {/*     alt={alt}*/}
            {/*     className={"block lg:hidden h-8 w-auto"}*/}
            {/*/>*/}
            {/*<img className=""*/}
            {/*     src={largeSrc}*/}
            {/*     alt="Workflow"/>*/}
            {/*<img className="hidden lg:block h-8 w-auto"*/}
            {/*     src={smallSrc}*/}
            {/*     alt="Workflow"/>*/}
        </div>
    )
};


export default Logo;