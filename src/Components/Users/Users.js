import React from "react";
import './Users.css';
export default function Users(props){
    return (
        <ul>
            {props.users.map(user=>{
                return(
                    <li className = 'box-of-li' key = {user.key}>
                        <div>{user.name} ({user.age} years old)</div>
                    </li>
                )
            })}
        </ul>
    );
}