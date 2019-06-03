import React from 'react'

export default function Header () {
    return (
        <div className="header">
            <i class="fas fa-bookmark" id="logo" style={{color: 'red', marginTop: '2%'}}></i>
            <h1 style={{fontSize: "5vw", textDecoration: 'underline', marginTop: '2%'}}>Derek's Bookshelf!</h1>
            <i className="fas fa-bars" id="menu-icon" style={{marginTop: '2%'}}></i>
        </div>
    )
}