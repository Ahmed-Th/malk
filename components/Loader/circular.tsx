import React from 'react';
import { CircularProgress } from '@material-ui/core';

interface LoaderProps {
    size? : number
}

const Loader = (Props : LoaderProps) => {

    const size = Props.size ? Props.size : 40;

    return(
        <div style={{width : "100%" , height : "100%" , display: "flex" , justifyContent : "center" , alignItems : "center"}}>
            <CircularProgress size={size}/>
        </div>
    )
}

export {Loader};