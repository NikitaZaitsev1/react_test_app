import React, {FC} from 'react';
import {IPost} from "../../types/types";

import List from "../List";

import PostItem from "./PostItem";
import {usePosts} from "../../hooks/posts";

const PostsPage: FC = () => {
    const {posts, loading, navigate} = usePosts()


    return (
        <div className="fixed bg-black/50 top-0 right-0 left-0 bottom-0">
            <div>
                {loading && <p style={{textAlign: "center"}}>Loading ...</p>}
                <List
                    loading={loading}
                    items={posts}
                    renderItem={(post: IPost) =>
                        <PostItem
                            onClick={(post) => navigate('/posts/' + post.id)}
                            post={post}
                            key={post.id}
                        />}
                />
            </div>
        </div>
    )
};

export default PostsPage;