import * as React from 'react';
import {Link} from "gatsby";


export enum MenuItemTypes {
    link="link",
    button="button",
    menuPopper="menuPopper",
}

export interface ISubItemProps {
    name?: string,
    to?: string,
}


interface IMenuItemProps {
    to?: string,
    display?: 'inline' | 'block';
    textType?: 'text-sm' | "text-base",
    name?: string,
    children?: React.ReactNode,
    type?: 'link' | 'button' | 'menuPopper',
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => {},
    subItems?: Array<ISubItemProps>
}

const MenuItem: React.FC<IMenuItemProps> = (
    {
        to,
        name,
        display = "inline",
        textType = 'text-base',
        children,
        type=MenuItemTypes.link,
        onClick=null,
        subItems = []
    }) => {
    const classes = [
        "text-gray-600",
        "hover:text-blue-600",
        display,
        "px-2",
        "rounded-md",
        "cursor-pointer",
        textType,
        "font-medium",
        "relative",
    ];
    const [menuAnchor, setMenuAnchor] = React.useState(null);
    const isLink = type === MenuItemTypes.link && Boolean(to);
    const isButton = type === MenuItemTypes.button && Boolean(onClick);
    const isMenuPopper = type === MenuItemTypes.menuPopper && subItems.length;

    const handleOpenMenu = (event) => setMenuAnchor(event.target);
    const handleCloseMenu = () => setMenuAnchor(null);

    return (
        <React.Fragment>
            {React.createElement(
                isLink ?
                    Link :
                    isButton ?
                        'button' :
                        'div',
                {
                    to,
                    className: classes.join(" "),
                    onClick: isMenuPopper ? handleOpenMenu : onClick,
                },
                <React.Fragment>
                    {name}
                    {children}

                </React.Fragment>
            )}
            {isMenuPopper ? (
                <MenuPopper
                    anchor={menuAnchor}
                    items={subItems}
                    onClose={handleCloseMenu}
                />
            ):null}
        </React.Fragment>
    );
};



interface IMenuPopperProps {
    anchor?: any;
    items:Array<ISubItemProps>;
    onClose?: () => void;
}

const MenuPopper: React.FC<IMenuPopperProps> = ({items, anchor, onClose}) => {
    if (!anchor) {
        return null
    }
    return (
        <div className={"fixed top-0 bottom-0 left-0 right-0 z-20"} onClick={onClose}>
            <div
                style={{
                    left: anchor.offsetLeft + anchor.offsetWidth | 0,
                    top: anchor.offsetTop + anchor.offsetHeight + 10
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


export default MenuItem;