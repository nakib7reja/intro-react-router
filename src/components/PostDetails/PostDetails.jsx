import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetails = () => {
    const post = useLoaderData()
    const { title, body } = post
    const navigate = useNavigate();

    const PostDetailsStyle = {
        border: '2px solid black',
        width: '500px',
        padding: '20px',
        margin: '20px',
        borderRadius: '20px'
    }
    return (
        <div style={PostDetailsStyle}>
            <h4>Title: {title}</h4>
            <p>Body: {body}</p>
            <button onClick={() => navigate(-1)}>Go back</button>
        </div>
    );
};

export default PostDetails;