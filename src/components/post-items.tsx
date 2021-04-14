import * as React from 'react';
import PostItem from "./post-item";
import {MdMoodBad} from 'react-icons/md'
import {Link} from 'gatsby';


interface IPostItemsProps {
    posts: Array<any>; // post nodes
}

const PostItems: React.FC<IPostItemsProps> = ({posts = []}) => {
    if (posts.length === 0) {
        return (
            <div className={"flex justify-center items-center mt-32 flex-col"}>
                <div><MdMoodBad className={"text-gray-300"} size={90}/></div>
                <p className={"mt-5 text-gray-500"}>هیچ موردی یافت نشد!</p>
                <p className={"mt-5 text-gray-500"}>بازگشت به <Link className={"text-blue-500"} to={"/"}>خانه</Link></p>
            </div>
        )
    }
    return (
        <div className={"grid grid-cols-3 gap-x-10 gap-y-16 mt-20"}>
            {posts.map(({node: {frontmatter: {title, thumbnail, slug = ''}}}, i) => {
                return (
                    <PostItem
                        to={`/${slug}`}
                        key={i}
                        category={"category"}
                        title={title}
                        image={thumbnail?.childImageSharp?.fixed}
                    />
                )
            })}
        </div>
    );
};

export default PostItems;