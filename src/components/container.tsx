import * as React from 'react';


interface IContainerProps {
    children: React.ReactNode,
    className?: string
}


const Container:React.FC<IContainerProps> = ({children, className}) => {
    return (
        <div className={`max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 pt-10 ${className}`}>
            {children}
        </div>
    );
};

export default Container;