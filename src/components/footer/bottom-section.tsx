import * as React from 'react';

function BottomSection({children}) {
    return (
        <div className={"bg-gray-900 py-3 sm:px-20 px-5"}>
            <p className={"text-gray-400 text-xs"}>{children}</p>
        </div>
    );
}

export default BottomSection;