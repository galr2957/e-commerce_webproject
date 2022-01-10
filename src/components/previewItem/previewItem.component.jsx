import React from "react";

import './previewItem.styles.scss';

const PreviewItem = ({item}) => (
    <div className="preview-item"> 
        <div className="preview-item-img"
        style ={{
            backgroundImage : `url(${item.imageUrl})`
        }}/>
        <div className="collection-footer">
            <span className="name"> {item.name} </span>
            <span className="price"> {item.price}</span>
        </div>

    </div>
)

export default PreviewItem;