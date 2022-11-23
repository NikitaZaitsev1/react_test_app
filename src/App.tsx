import React from 'react';
import {NavLink, Route, Routes} from 'react-router-dom';
import UserItemPage from "./components/user/UserItemPage";
import UserPage from "./components/user/UserPage";
import Button from "./components/UI/button/button";
import AppPage from "./components/AppPage";
import PostPage from "./components/post/PostPage";
import PostItemPage from "./components/post/PostItemPage";
import CreatePost from "./components/post/CreatePost";
import {IPost} from "./types/types";
import {usePosts} from "./hooks/posts";

const App = () => {
    const {posts, loading, navigate, addPost} = usePosts()

    const createHandler = (post: IPost) => {
        addPost(post)
    }

    return (

        <div className="container mx-auto max-w-2xl pt-5">
            <div style={{textAlign: "center"}}>
                <NavLink to="/">
                    <Button>App</Button>
                </NavLink>
                <NavLink to="/users">
                    <Button>Users</Button>
                </NavLink>
                <NavLink to='/posts'>
                    <Button>Posts</Button>
                </NavLink>
                <NavLink to='/create_post'>
                    <Button>Create post</Button>
                </NavLink>
            </div>
            <Routes>
                <Route path="/" element={<AppPage/>}/>
                <Route path="/users" element={<UserPage/>}/>
                <Route path="/posts" element={<PostPage/>}/>
                <Route path="/create_post" element={<CreatePost onCreate={createHandler}/>}/>
                <Route path="/posts/:id" element={<PostItemPage/>}/>
                <Route path="/users/:id" element={<UserItemPage/>}/>
                <Route path="*" element={<div>Not Found</div>}/>
            </Routes>
            <>
            </>
        </div>
    );
};

export default App;