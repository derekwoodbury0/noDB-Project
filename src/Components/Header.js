import React from 'react'

export default function Header () {
    return (
        <div className="header">
            <i class="fas fa-bookmark" id="logo" style={{color: 'red'}}></i>
            <h1 style={{fontSize: "5vw", textDecoration: 'underline'}}>Derek's Bookshelf!</h1>
            <i className="fas fa-bars" id="menu-icon"></i>
        </div>
    )
}