import React from 'react';

const MenuItem = ({ title, subTitle }) => (
    <div className='menu-item'>
        <div className='content'>
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>{subTitle}</span>
        </div>
    </div>
)

export default MenuItem;