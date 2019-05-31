import React, { Component } from 'react'
import axios from 'axios'
import AddBook from './AddBook'
import Display from './Display'

export default class Main extends Component {
    constructor() {
        super()

        this.state = {
            books: [],
            totalPages: 0
        }
    }
    
    componentDidMount() {
        axios.get('/api/books').then( (res) => {
            this.setState ({ books: res.data})
            this.pageCount()
        }).catch(err => console.log(err))
    }
            
    pageCount = () => {
        let totalPageCount = this.state.books.reduce((total, element) => {
            return total + element.pages
        }, 0)
        this.setState ({ totalPages: totalPageCount})
        console.log(this.state.totalPages)
    }

    addBook = (newBook) => {
        axios.post('/api/books', newBook).then( res => {
            this.setState ({books: res.data })
        })
    }

    updateBook = (updatedBook) => {
        axios.put(`/api/books/${updatedBook.id}`, updatedBook).then( res => {
            this.setState ({ books: res.data})
        }).catch(err => console.log(err))
    }

    deleteBook = id => {
        axios.delete(`./api/books/${id}`).then(res => {
            this.setState ({ books: res.data})
        }).catch(err => console.log(err))
    }


    render() {
        return (
            <div className="main">
                <AddBook addBook={this.addBook} totalPages={this.state.totalPages}/>
                <div className="displayBox">
                {this.state.books.map( book => {
                    return (
                            <Display key={book.id} 
                                book={book} 
                                updateBook={this.updateBook} 
                                deleteBook={() => this.deleteBook(book.id)}
                            />
                            )
                        })}
                </div>
            </div>
        )
    }
}