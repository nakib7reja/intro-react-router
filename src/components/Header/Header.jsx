import React from 'react';
import { Link, NavLink } from 'react-router';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1>This is header</h1>
            <nav>
                {/* <a href="/">Home</a>
                <a href="/mobile">Mobiles</a>
                <a href="/laptops">Laptops</a>
                <a href=""></a> */}

                <NavLink to='/'>Home</NavLink>
                <NavLink to='/mobile'>Mobile</NavLink>
                <NavLink to='/laptops'>laptop</NavLink>
                {/* <NavLink to='/about'>About</NavLink> */}
                <NavLink to='/users'>Users</NavLink>
                <NavLink to='/user2'>User2</NavLink>
                <NavLink to='/posts'>Posts</NavLink>
            </nav>
        </div>
    );
};

export default Header;