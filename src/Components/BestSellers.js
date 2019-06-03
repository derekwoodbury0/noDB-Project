import React, { Component } from 'react'

export default class BestSellers extends Component {
    render() {
        let { book } = this.props
        return (
            <div style={{marginBottom: '15px'}}>
                <li>{book.title}<br/>
                {book.author}
                </li>
            </div>
        )
    }
}