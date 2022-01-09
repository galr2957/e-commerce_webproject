import React from "react";

import './menuItem.styles.scss';

const Menuitem = ({title, key, size, imageUrl}) => (
    <div className={`${size} menu-item`} >
        <div className="backgroud-image" 
             style ={{
                 backgroundImage : `url(${imageUrl})`
             }} 
             />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>BUY NOW</span>
        </div>
    </div>
)

export default Menuitem