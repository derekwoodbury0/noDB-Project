import React from 'react'
import { Link } from 'react-router-dom'

export default function Header () {
    return (
        <div className="header">
            <Link to="/">
                <i class="fas fa-bookmark" id="logo" style={{color: 'red', marginTop: '2%'}}></i>
            </Link>
            <h1 style={{fontSize: "5vw", textDecoration: 'underline', marginTop: '2%'}}>Derek's Bookshelf!</h1>
            <Link to="./hello">
                <i className="fas fa-bars" id="menu-icon" style={{marginTop: '2%', color: 'white'}}></i>
            </Link>
        </div>
    )
}