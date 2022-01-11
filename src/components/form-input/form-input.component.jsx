import React from "react";

import './form-input.styles.scss';

const Forminput = ({handleChange, label, ...otherprops}) => (
    <div className="group">
        <input className="form-input" type={label} onChange={handleChange} {...otherprops}/>
    {
        label? 
        (<label className={`${otherprops.value.length ? 'shrink' : ''} form-input-label`}>
         {label}
        </label>
        )
        : null
    }
    </div>
)

export default Forminput;