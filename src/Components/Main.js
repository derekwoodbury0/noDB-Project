import React, { Component } from 'react'
import axios from 'axios'
import AddBook from './AddBook'
import Display from './Display'
import BestSellers from './BestSellers'

export default class Main extends Component {
    constructor() {
        super()

        this.state = {
            books: [],
            bookCount: 0,
            search: '',
            toggle: false,
            fictionBooks: [],
            nonFictionBooks: []
        }

        this.addRandomFictionBook = this.addRandomFictionBook.bind(this)
        this.addRandomNonFictionBook = this.addRandomNonFictionBook.bind(this)
    }
    

    componentDidMount() {
        axios.get('/api/books').then( (res) => {
            this.setState ({ books: res.data})
            this.calculateTotalBooks()
        }).catch(err => console.log(err))

        axios.get('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=ltq5v5nWenzDUaX0TGpRNvO5IFkshMcH')
            .then(res => {
                this.setState ({fictionBooks: res.data.results.books})
             })

        axios.get('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-nonfiction.json?api-key=ltq5v5nWenzDUaX0TGpRNvO5IFkshMcH')
    .then(res => {
        this.setState ({nonFictionBooks: res.data.results.books})
        })
}
    
    
    calculateTotalBooks = () => {
        let { books } = this.state
        let totalBooks = books.length

        this.setState ({ bookCount: totalBooks})
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

    searchBook = (newSearch) => {
        axios.get(`./api/books/search/?title=${newSearch}`).then(res => {
            this.setState ({ books: res.data })
        })
    }

    async addRandomFictionBook() {
        const randomNumber = Math.floor(Math.random() * 15)
        let randomBook
        await axios.get('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=ltq5v5nWenzDUaX0TGpRNvO5IFkshMcH').then(res => {
            let {title, author, book_image} = res.data.results.books[randomNumber]
            randomBook = {title: title, author: author, imageUrl: book_image, genre: 'Fiction'}
        })
        axios.post('/api/books', randomBook).then(res => {
            this.setState ({ books: res.data })
        })
    }

    async addRandomNonFictionBook() {
        const randomNumber = Math.floor(Math.random() * 15)
        let randomBook
        await axios.get('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-nonfiction.json?api-key=ltq5v5nWenzDUaX0TGpRNvO5IFkshMcH').then(res => {
            let {title, author, book_image} = res.data.results.books[randomNumber]
            randomBook = {title: title, author: author, imageUrl: book_image, genre: 'Non-Fiction'}
        })
        axios.post('/api/books', randomBook).then(res => {
            this.setState ({ books: res.data })
        })
    }

    toggleEdit = () => {
        this.setState ({ toggle: !this.state.toggle })
    }

    render() {
        return (
            <div className="main">
                <AddBook addBook={this.addBook} 
                    bookCount={this.state.bookCount} 
                    addRandomFictionBook={this.addRandomFictionBook} 
                    pageCount={this.state.pageCount} 
                    addRandomNonFictionBook={this.addRandomNonFictionBook}   
                />
                <div className="displayBox">
                    <div>
                        <input placeholder="Search Titles" onChange={ event => this.setState({ search: event.target.value })}
                        />
                        {this.state.toggle ?
                            <button onClick={() => {
                                this.componentDidMount()
                                this.toggleEdit()  
                                }}
                            >Cancel</button>
                        :
                            <button onClick={ () => {
                                let newSearch = this.state.search
                                this.searchBook(newSearch)
                                this.toggleEdit()
                                }}
                            >Search</button>
                        }
                    </div>
                
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
                <div className="rightSideDisplay">
                    <h3 style={{marginBottom: '5%'}}>New York Times Bestsellers Lists</h3>
                    <h4 style={{marginBottom: '3%'}}>Fiction</h4>
                    <ol>
                        {this.state.fictionBooks.map( book => {
                            return (
                                <BestSellers 
                                    book={book}
                                />
                            )
                        })}
                    </ol>
                    <h4 style={{marginBottom: '3%', marginTop: '10%'}}>Non-Fiction</h4>
                    <ol>
                        {this.state.nonFictionBooks.map( book => {
                            return (
                                <BestSellers
                                    book={book}
                                />
                            )
                        })}
                    </ol>
                </div>
            </div>
        )
    }
}