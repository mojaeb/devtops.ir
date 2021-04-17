import * as React from 'react';
import PostItem from "./post-item";
import {MdMoodBad} from 'react-icons/md'
import {Link} from 'gatsby';


interface IPostItemsProps {
    posts: Array<any>; // post nodes
}


const TEXTS = {
    notFount: "هیچ موردی یافت نشد!",
    goBack: "بازگشت به ",
    home: "خانه",
    unCategorized: "بدون دسته بندی"
};


const PostItems: React.FC<IPostItemsProps> = ({posts = []}) => {
    if (posts.length === 0) {
        return (
            <div className={"flex justify-center items-center mt-32 flex-col"}>
                <div><MdMoodBad className={"text-gray-300"} size={90}/></div>
                <p className={"mt-5 text-gray-500"}>
                    {TEXTS.notFount}
                </p>
                <p className={"mt-5 text-gray-500"}>
                    {TEXTS.goBack}
                    <Link className={"text-blue-500"} to={"/"}>
                        {TEXTS.home}
                    </Link>
                </p>
            </div>
        )
    }
    return (
        <div className={"grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-16 mt-20 pb-10 mx-4 sm:mx-0"}>
            {posts.map(({node: {frontmatter, timeToRead}}, i) => {
                const {title, thumbnail, slug = '', category, datetime} = frontmatter;
                return (
                    <PostItem
                        to={`/${slug}`}
                        key={i}
                        category={category?.name || TEXTS.unCategorized}
                        title={title}
                        datetime={datetime}
                        timeToRead={timeToRead}
                        image={thumbnail?.childImageSharp?.fixed}
                    />
                )
            })}
        </div>
    );
};

export default PostItems;