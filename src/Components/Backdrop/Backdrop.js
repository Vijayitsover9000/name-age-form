import React from "react";
import './Backdrop.css';
export default function Backdrop(props){
    function handleClick(){
        props.removePop();
    }
    return <div className = 'backdrop' onClick = {handleClick}>{props.children}</div>
}