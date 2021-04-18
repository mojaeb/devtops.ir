import * as React from 'react';


interface IContainerProps {
    children: React.ReactNode;
    className?: string;
    style?: any;
}


const Container:React.FC<IContainerProps> = ({children, style=null , className,...props}) => {
    return (
        <div className={`max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 pt-5 sm:pt-10 ${className}`} style={style} {...props}>
            {children}
        </div>
    );
};

export default Container;