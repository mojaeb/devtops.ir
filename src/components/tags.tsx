import * as React from 'react';

function Tags({tags}) {
    return (
        <div className={"flex flex-wrap pt-16"}>
            {tags.map((t, i) => (
                <div
                    key={i}
                    className={"border-blue-400 ml-3 bg-blue-50 text-blue-500 border-2 rounded-md px-3 py-1"}
                >
                    {t}
                </div>
            ))}
        </div>
    );
}

export default Tags;