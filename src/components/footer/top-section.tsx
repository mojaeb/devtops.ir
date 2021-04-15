import * as React from 'react';
import {FaTelegramPlane} from "react-icons/fa";
import {Link} from 'gatsby';

interface ILink {
    text: string,
    url: string,
}

interface ITopSectionProps {
    telegramText: string;
    telegramLink: string;
    links: Array<ILink>
}




const TopSection: React.FC<ITopSectionProps> = ({telegramText, telegramLink, links}) => {
    return (
        <div className={"bg-gray-800 py-5 px-20 flex justify-between items-center"}>
            <div className={"text-white text-sm flex gap-5"}>
                {links.map((l: ILink, i: number) => (<Link key={i} to={l.url}>{l.text}</Link>))}
            </div>
            <a
                href={telegramLink}
                target={"_blank"}
                className={"px-5 py-2 text-white rounded-md flex gap-3 items-center"}
                style={{backgroundColor: '#0088CC'}}
            >
                <FaTelegramPlane size={20}/>
                <p className={"text-sm"}>{telegramText}</p>
            </a>
        </div>
    );
}

export default TopSection;