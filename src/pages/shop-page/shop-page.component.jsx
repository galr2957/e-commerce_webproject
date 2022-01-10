import React from 'react';

import './shop-page.styles.scss';
import SHOP_DATA from './shopdata.js'
import Collectionpreview from '../../components/collection-preview/collection-preview.component';

class Shoppage extends React.Component{
    constructor(props) {
        super(props);   

        this.state = {
           collections: SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state;
        return(       
             <div className='shoppage'>
                <h1>collection</h1>
                {collections.map(({id, ...otherprops}) => (
                    <Collectionpreview key={id} {...otherprops}/>
                ))}
             </div>
    )}
}

export default Shoppage;
