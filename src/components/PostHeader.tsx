import * as React from 'react'


interface IPostHeaderProps {
    title?: string;
    // time?: number;
}

const PostHeader: React.FC<IPostHeaderProps> = ({title}) => {
    return (
        <div className={"flex justify-between"}>
            <div className={"w-7/12"}>
                <div className={"block h-96 bg-blue-200 ml-4 rounded-md"}>
                </div>
            </div>
            <div className={"w-5/12 px-5 flex flex-col"}>
                <p className={"pb-8 pt-4 text-lg text-gray-500"}>جاوااسکریپت</p>
                <p className={`text-4xl font-normal font-medium flex-1 heading-text header-title`} style={{lineHeight: '3rem' }}>
                    <span>{title}</span>
                </p>
                <p className={"pb-4 pt-4 text-gray-500"}>3 تیر 1399 / 3 دقیقه خواندن</p>
            </div>
        </div>
    )
};


export default PostHeader;