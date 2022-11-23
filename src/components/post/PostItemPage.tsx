import React, {FC, useEffect, useState} from 'react';
import {IPost} from "../../types/types";
import axios from "axios";
import {useParams, useNavigate} from 'react-router-dom';
import Button from "../UI/button/button";

// interface UserItemPageParams {
//     id: string;
// }

export type PostItemPageParams = { id: string; }


const PostItemPage: FC = () => {

    const [post, setPost] = useState<IPost | null>(null)
    const params = useParams<PostItemPageParams>()
    const navigate = useNavigate()

    useEffect(() => {

        fetchPost()
    }, [])

    async function fetchPost() {
        try {
            const response = await axios.get<IPost>('https://jsonplaceholder.typicode.com/posts/' + params.id)
            setPost(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div>
            <Button onClick={() => navigate('/posts')}>Back</Button>
            <h3 style={{color: "orange"}}>Title: {post?.title}</h3>
            <div style={{color: "green"}}>
                Body: {post?.body}
            </div>
        </div>
    );
};

export default PostItemPage;