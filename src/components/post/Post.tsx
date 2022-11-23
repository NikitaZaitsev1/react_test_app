import {IPost} from "../../types/types";
import React, {FC} from 'react';

interface PostListProps {
    posts: IPost[];
}

const PostList: FC<PostListProps> = ({posts}) => {

    return (
        <div>
            {posts.map(post =>
                <div key={post.id} style={{padding: 15, border: '2px solid orange', margin: '10px'}}>
                    {post.id}. {post.title}
                    <p>{post.body}</p>
                </div>
            )}
        </div>
    );
};

export default PostList;