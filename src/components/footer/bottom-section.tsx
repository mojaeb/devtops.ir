import * as React from 'react';

function BottomSection({children}) {
    return (
        <div className={"bg-gray-900 py-3 px-20"}>
            <p className={"text-gray-400 text-xs"}>{children}</p>
        </div>
    );
}

export default BottomSection;