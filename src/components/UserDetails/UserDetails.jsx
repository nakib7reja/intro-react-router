import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();
    const params = useParams();
    console.log(params.userIdi)

    const { website, name } = user;


    return (
        <div>
            <h2>User details here</h2>
            <h3>Name: {name}</h3>
            <p>website: {website}</p>
        </div>
    );
};

export default UserDetails;