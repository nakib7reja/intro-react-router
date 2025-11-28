import React from 'react';
import { Link, useNavigate } from 'react-router';

const SinglePost = ({ post }) => {
    const { id, title } = post
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(`/posts/${id}`);
    }

    const postStyle = {
        border: '2px solid orange',
        margin: '10px',
        padding: '10px',
        borderRadius: '50px',
        width: '600px'
    }
    return (
        <div style={postStyle}>
            <h2>Title: {title}</h2>
            <Link to={`/posts/${id}`}>
                <button>Show details</button>
            </Link>
            <button onClick={handleNavigate}>Details of {id}</button>
        </div>
    );
};

export default SinglePost;