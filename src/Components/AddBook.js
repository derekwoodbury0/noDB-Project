import React, { Component } from 'react'

export default class AddBook extends Component {
    constructor (props) {
        super(props)
    
        this.state = {
            title: '',
            author: '',
            genre: '',
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
                <h1 style={{marginBottom: '50px'}}>Add Book!</h1>
                <input
                    className="addBookInput" 
                    placeholder="Title" 
                    style={{marginBottom: '15px'}}
                    type="text"
                    name="title"
                    value={this.state.title}
                    onChange={this.handleChange}    
                />
                <input 
                    className="addBookInput" 
                    placeholder="Author" 
                    style={{marginBottom: '15px'}}
                    type="text"
                    name="author"
                    value={this.state.author}
                    onChange={this.handleChange}    
                />
                <input 
                    className="addBookInput" 
                    placeholder="Genre" 
                    style={{marginBottom: '15px'}}
                    type="text"
                    name="genre"
                    value={this.state.genre}
                    onChange={this.handleChange}    
                />
                <input 
                    className="addBookInput" 
                    placeholder="Image URL" 
                    style={{marginBottom: '15px'}}
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