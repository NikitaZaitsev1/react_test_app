import React, {FC} from 'react';
import {IPost} from "../../types/types";

interface PostItemProps {
    post: IPost;
    onClick: (post: IPost) => void;
}


const PostItem: FC<PostItemProps> = ({post, onClick}) => {
    return (
        <div onClick={() => onClick(post)} style={{padding: 15, border: '2px solid orange', margin: '10px'}}>
            {post.id}. {post.title}
            <p> {post.body} </p>
        </div>
    );
};

export default PostItem;