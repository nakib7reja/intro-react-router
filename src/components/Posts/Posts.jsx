import React from 'react';
import { useLoaderData } from 'react-router';
import SinglePost from '../SinglePost/SinglePost';

const Posts = () => {
    const posts = useLoaderData();
    return (
        <div>
            <h2>Here is all Posts: {posts.length}</h2>
            {
                posts.map(post => <SinglePost key={post.id} post={post}></SinglePost>)
            }
        </div>
    );
};

export default Posts;