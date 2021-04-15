import * as React from 'react';
import MenuItem from "./menu-item";
import {RiCloseFill, RiSearchLine} from "react-icons/ri";

function MenuItems(
    {
        items,
        onToggleSearchBox,
        openSearchBox
    }
) {
    return (
        <div className="hidden sm:block sm:mr-6 relative">
            <div className="flex space-x-4 space-x-reverse items-center">
                {items.map((m, i) => (
                    <MenuItem
                        key={i}
                        {...m}
                    />
                ))}
                <button
                    onMouseUp={onToggleSearchBox}
                    className={"pr-10"}
                >
                    {openSearchBox ? (
                        <RiCloseFill size={23}/>
                    ) : (
                        <RiSearchLine size={23}/>
                    )}
                </button>

            </div>
        </div>
    );
}

export default MenuItems;