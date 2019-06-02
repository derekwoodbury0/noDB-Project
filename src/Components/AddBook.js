import React, { Component } from 'react'
import AddRandomButton from './AddRandomButton';

export default class AddBook extends Component {
    constructor (props) {
        super(props)
    
        this.state = {
            title: '',
            author: '',
            genre: '',
            imageUrl: '',
            pages: '',
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
            
            this.setState ({ title: '', author: '', genre: '', pages: '', imageUrl: ''})
        }
    }

    render() {
        return (
            <div className="addBook">
                <h1 style={{marginBottom: '3vh', fontSize: '1.5vw'}}>Total Books: {this.props.bookCount}</h1>
                <h1 style={{marginBottom: '10vh', fontSize: '1.5vw'}}>Total Pages: {this.props.pageCount}</h1>
                <h1 style={{marginBottom: '5%', fontSize: '3vw'}}>Add Book!</h1>
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
                    name="pages"
                    value={this.state.pages}
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
                <h5 style={{marginBottom: '.5%', marginTop: '.5%'}}>or</h5>
                <div>
                    <AddRandomButton 
                        addRandomBook={this.props.addRandomFictionBook}
                        buttonText='Add Random Fiction Book'
                    />
                    <AddRandomButton
                        addRandomBook={this.props.addRandomNonFictionBook}
                        buttonText='Add Random Non-Fiction Book'
                    />
                    {/* <button onClick={this.props.addRandomFictionBook}>Add A Random Fiction Book!</button>
                    <button onClick={this.props.addRandomNonFictionBook}>Add A Random Non-Fiction Book!</button> */}
                </div>
            </div>
        )
    }
}