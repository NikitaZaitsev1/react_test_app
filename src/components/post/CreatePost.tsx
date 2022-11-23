import React, {useState} from 'react';
import {IPost} from "../../types/types";
import axios from "axios";


interface CreatePostProps {
    onCreate: (post: IPost) => void;
}

const postData: IPost = {
    title: '',
    body: '',
}

const CreatePost = ({onCreate}: CreatePostProps) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [errorTitle, setErrorTitle] = useState('');
    const [errorBody, setErrorBody] = useState('');

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault()
        setTitle('')
        setBody('')

        if (title.trim().length === 0) {
            setErrorTitle('Please enter valid title.')
            return
        }

        postData.title = title

        if (body.trim().length === 0) {
            setErrorBody('Please enter valid body.')
            return
        }

        postData.body = body

        const response = await axios.post<IPost>('https://jsonplaceholder.typicode.com/posts', postData)

        onCreate(response.data)

    }

    return (
        <div style={{textAlign: "center", marginTop: 50}}>
            <h1 style={{marginBottom: 40}}>Create post</h1>
            <form onSubmit={submitHandler}>
                <input type="text"
                       className="border py-2 px-4 mb-2"
                       placeholder="Enter post title..."
                       value={title}
                       onChange={event => setTitle(event.target.value)}
                >
                </input>
                <p>{errorTitle}</p>
                <p>
                    <input type="text"
                           className="border py-2 px-4 mb-2"
                           placeholder="Enter post text..."
                           value={body}
                           onChange={event => setBody(event.target.value)}
                    >
                    </input>
                    <p>{errorBody}</p>
                </p>
                <p>
                    <button type="submit" className="btn btn-info">Create</button>
                </p>
            </form>
        </div>
    );
};

export default CreatePost;