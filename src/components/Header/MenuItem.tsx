import * as React from 'react';
import {Link} from "gatsby";

interface IMenuItemProps {
    to: string,
    display?: 'inline' | 'block';
    textType?: 'text-sm' | "text-base",
    name: string,
}

const MenuItem: React.FC<IMenuItemProps> = (
    {
        to,
        name,
        display = "inline",
        textType = 'text-base',
    }) => {
    const classes = [
        "text-gray-500",
        "hover:text-blue-600",
        display,
        "px-3",
        "py-2",
        "rounded-md",
        textType,
        "font-medium"
    ];
    return (
        <Link
            to={to}
            className={classes.join(" ")}>
            {name}
        </Link>
    )
};

export default MenuItem;