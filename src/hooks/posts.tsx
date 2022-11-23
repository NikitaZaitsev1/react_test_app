import {useEffect, useState} from "react";
import {IPost} from "../types/types";
import {useNavigate} from "react-router-dom";
import axios from "axios";

export function usePosts() {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    function addPost(post: IPost) {
        setPosts(prev => [...prev, post])
    }

    async function fetchPosts(limit = 150, page = 1) {
        setLoading(true)
        try {

            const response = await axios.get<IPost[]>('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    _limit: limit,
                    _page: page,
                }
            })
            setPosts(response.data)

            // setTotalCount(response.headers['x-total-count'])
        } catch (e) {
            alert(e)

        }
        setLoading(false)
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    return {posts, loading, navigate, addPost}
}