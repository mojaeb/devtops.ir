import * as React from "react";
import {Link} from "gatsby";
import {ISubItemProps} from "./Header/menu-item";

interface IMenuPopperProps {
    anchor?: any;
    items: Array<ISubItemProps>;
    onClose?: () => void;
}

const MenuPopper: React.FC<IMenuPopperProps> = ({items, anchor, onClose}) => {
    if (!anchor) {
        return null
    }
    const {x, y, height, width} = anchor?.getBoundingClientRect() || {x: 0, y: 0, height: 0, width: 0};
    console.log(anchor?.getBoundingClientRect());
    return (
        <div className={"fixed inset-0 z-20"} onClick={onClose}>
            <div
                style={{
                    left: x - (width/2),
                    top: y + (height / 2),
                }}
                className="origin-top-right z-50 absolute mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu"
            >
                {items.map((item, index) => (
                    <Link
                        to={item.to}
                        key={index}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </div>
    )
};

export default MenuPopper;