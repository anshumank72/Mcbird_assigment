import React from 'react';
import { Redirect  } from 'react-router-dom';

const proct=(props)=>{
    const Cmp=props.cmp
    var Token=JSON.parse(localStorage.getItem('token'))
    return(
        <div>{Token?<Cmp/>:<Redirect to="/" />}</div>
    )
}
export default proct;

