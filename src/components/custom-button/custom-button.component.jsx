import React from "react";

import './custom-button.styles.scss';

const Custombutton =({childern,value,  ...otherprops}) => (
    <button className="custom-button" {...otherprops}>
        {value}
    </button>
)

export default Custombutton;