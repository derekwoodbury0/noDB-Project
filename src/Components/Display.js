import React, { Component } from 'react'
import EditBook from './EditBook'

export default class Display extends Component {
    constructor(props) {
        super(props)

        this.state = {
            edit: false
        }
    }

    toggleEdit = () => {
        this.setState ({ edit: !this.state.edit })
    }
    
    render() {
        let { book } = this.props
        return (
            <div className="book">
                <h2 style={{marginBottom: '15px'}}>{book.title}</h2>
                <h3 style={{marginBottom: '10px'}}>{book.author}</h3>
                <h4>{book.genre}</h4>
                <img src={book.imageUrl} alt="Book Cover" width="200px" height="300px"/>
                <div className="bookButtons">
                    {this.state.edit ? 
                        <EditBook book={book} toggleEdit={this.toggleEdit} updateBook={this.props.updateBook}/>
                    :
                        <div>
                            <button onClick={this.toggleEdit}>Edit</button>
                            <button onClick={this.props.deleteBook}>Delete</button>
                        </div>
                    }
                </div>
            </div>
        )
    }
}