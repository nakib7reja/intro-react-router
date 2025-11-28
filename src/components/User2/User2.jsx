import React, { use } from 'react';

const User2 = ({UserPromise}) => {
    const userData = use(UserPromise)
    console.log(userData)
    return (
        <div>
           <h2>This is User2</h2>
        </div>
    );
};

export default User2;