import React, { Component } from 'react'

export default class EditBook extends Component {
    constructor(props) {
        super(props)

        let {title, author, genre} = this.props.book
        this.state = {
            title,
            author,
            genre
        }
    }

    handleTitleChange = value => {
        this.setState ({ title: value})
        console.log(this.state)
    }

    handleAuthorChange = value => {
        this.setState ({ author: value})
    }

    handleGenreChange = value => {
        this.setState ({ genre: value})
    }

    handleClick = () => {
        let updatedBook = {...this.props.book, ...this.state}
        this.props.updateBook(updatedBook)
    }

    updateForm = () => {
        this.handleClick()
        this.props.toggleEdit()
    }

    render() {
        return (
            <div>
                <input 
                    type="text"
                    name="title"
                    value={this.state.title}
                    placeholder="title"
                    onChange={(event) => this.handleTitleChange(event.target.value)}
                />
                <input 
                    type="text"
                    name="author"
                    value={this.state.author}
                    placeholder="author"
                    onChange={(event) => this.handleAuthorChange(event.target.value)}
                />
                <input 
                    type="text"
                    name="genre"
                    value={this.state.genre}
                    placeholder="genre"
                    onChange={(event) => this.handleGenreChange(event.target.value)}
                />
                <button onClick={this.updateForm}>Update</button>
                <button onClick={this.props.toggleEdit}>Cancel</button>
            </div>
        )
    }
}