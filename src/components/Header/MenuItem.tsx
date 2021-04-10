import * as React from 'react';
import {Link} from "gatsby";

interface IMenuItemProps {
    to: string,
    display?: 'inline' | 'block';
    textType?: 'text-sm' | "text-base",
    name: string,
    children?: React.ReactNode,
}

const MenuItem: React.FC<IMenuItemProps> = (
    {
        to,
        name,
        display = "inline",
        textType = 'text-base',
        children,
    }) => {
    const classes = [
        "text-gray-600",
        "hover:text-blue-600",
        display,
        "px-2",
        "rounded-md",
        textType,
        "font-medium"
    ];
    return (
        <Link
            to={to}
            className={classes.join(" ")}>
            {name}
            {children}
        </Link>
    )
};

export default MenuItem;