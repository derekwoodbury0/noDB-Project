import React, { Component } from 'react'

export default class AddBook extends Component {
    constructor (props) {
        super(props)
    
        this.state = {
            title: '',
            author: '',
            genre: '',
            pages: 0,
            imageUrl: '',
        }
    }

    handleChange = (event) => {
        let { value, name } = event.target

        this.setState ({ [name]: value })
    }

    handleClick = () => {
        if (this.state.title !== '' && this.state.author !== '' && this.state.genre !== '') {

            let newBook = this.state 
            
            this.props.addBook(newBook)
            
            this.setState ({ title: '', author: '', genre: '', imageUrl: ''})
        }
    }

    render() {
        return (
            <div className="addBook">
                <h1 style={{marginBottom: '100px'}}>Total Pages On<br></br>Your Shelf:<br></br>{this.props.totalPages}</h1>
                <h1 style={{marginBottom: '50px'}}>Add Book!</h1>
                <input
                    className="addBookInput" 
                    placeholder="Title" 
                    type="text"
                    name="title"
                    value={this.state.title}
                    onChange={this.handleChange}    
                />
                <input 
                    className="addBookInput" 
                    placeholder="Author" 
                    type="text"
                    name="author"
                    value={this.state.author}
                    onChange={this.handleChange}    
                />
                <input 
                    className="addBookInput" 
                    placeholder="Genre" 
                    type="text"
                    name="genre"
                    value={this.state.genre}
                    onChange={this.handleChange}    
                />
                <input
                    className="addBookInput"
                    placeholder="Number of Pages"
                    type="number"
                    // value={this.state.pages}
                    onChange={this.handleChange}
                />
                <input 
                    className="addBookInput" 
                    placeholder="Image URL" 
                    type="text"
                    name="imageUrl"
                    value={this.state.imageUrl}
                    onChange={this.handleChange}    
                />

                <button onClick={this.handleClick}>Add!</button>
            </div>
        )
    }
}