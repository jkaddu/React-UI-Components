import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';

const HeaderTitle = (e) => {
    const date = Date.now();
    return (
        <div className='headerTitle'>
            <ImageThumbnail />
            <h1>Lambda School</h1>
            <a href='https://lambdaschool.com/contact' rel="noopener noreferrer" target="_blank">@LambdaSchool</a>
            <p>{date}</p>
        </div>
    )
}

export default HeaderTitle;