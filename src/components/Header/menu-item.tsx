import * as React from 'react';
import {Link} from "gatsby";
import MenuPopper from "../menu-popper";


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
    textType?: 'text-sm' | "text-base", // text type with tailwinds styles
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




export default MenuItem;