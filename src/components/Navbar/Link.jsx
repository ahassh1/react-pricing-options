import React from 'react';

const Link = ({route}) => {
    return (
        <div>
            <ul>
                <li className='mr-10'><a href={route.path}>{route.name}</a></li>
            </ul>
        </div>
    );
};

export default Link;