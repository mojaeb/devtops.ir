import * as React from 'react';

function Container({children}) {
    return (
        <div className={"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 pt-10"}>
            {children}
        </div>
    );
}

export default Container;