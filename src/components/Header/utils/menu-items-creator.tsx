import {MenuItemTypes} from "../menu-item";


const menuItemsCreator = (authors: Array<any> = [], categories: Array<any> = []) => {
    return [
        {
            name: "خانه",
            to: "/",
            type: MenuItemTypes.link
        },
        {
            name: "دسته بندی",
            type: MenuItemTypes.menuPopper,
            subItems: categories.map(a => ({
                name: a.node.name,
                to: `/category/${a.node.id}`
            }))
        },
        {
            name: "نویسنده ها",
            type: MenuItemTypes.menuPopper,
            subItems: authors.map(a => ({
                name: a.node.name,
                to: `/author/${a.node.id}`
            }))
        },
        {
            name: "درباره ما",
            to: "/about-us",
            type: MenuItemTypes.link
        },
    ]
};

export default menuItemsCreator;