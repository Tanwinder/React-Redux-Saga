import React from 'react';

import { Link } from 'react-router-dom'

const Header = ({items}) => {
    return (
        <div className="navlink">
            <div>
                {
                    items.map( ac => <Link key={ac.id} to={ac.path}>{ac.id}</Link>)
                }
            </div>
            <h3>React Redux Saga App</h3>
            <div>User Info</div>
        </div>
    )
};

export default Header;