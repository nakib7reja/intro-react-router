import React, { use } from 'react';

const UserDetails2 = ({userPromise}) => {
    const userData = use(userPromise);
    const {name, email, website} = userData
    console.log(userData)
    return (
        <div>
            {/* <h2>User details2 here</h2> */}
            <h3>Name: {name}</h3>
            <p>Email:{email}</p>
            <p>website: {website}</p>
        </div>
    );
};

export default UserDetails2;