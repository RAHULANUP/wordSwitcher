import React from 'react';
import ReactDOM from 'react-dom';
import './Navbar.css';
export default function Navbar(props){
    return(
        <>
            <ul className='navbar'>
                <li className='wordify'><a href='/'>{props.title}</a></li>
                <li className='about'><a href='/about'>{props.about}</a></li>   
            </ul>  
        </>
    );
}