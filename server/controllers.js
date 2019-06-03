// let {randomFictionBooks, randomNonFictionBooks } = require('./randomBooks')

let id = 1

let books = [
    {
        id: id++,
        title: 'GAME OF THRONES',
        author: 'George RR Martin',
        genre: 'Fiction',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Nk_b7e3aHkHMCp-WPrkNcp3ZzraoeRAOflF_SxyepfdbyYzj'
    },
    {
        id: id++,
        title: 'HARRY POTTER AND THE GOBLET OF FIRE',
        author: 'JK Rowling',
        genre: 'Fiction',
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEGpdfTkZXnlLPiiiTRWL6alN3jJfavzFeSOZPvwT80P8tAB4K"
    }
]


module.exports = {
    read: (req, res) => res.send(books),
    
    create: (req, res) => {
        let newBook = req.body
        newBook.id = id++

        books.push(newBook)
        res.send(books)
    },

    update: (req, res) => {
        let { id } = req.params
        let index = books.findIndex(book => +book.id === +id)
        let updatedBook = req.body

        books.splice(index, 1, updatedBook)
        res.send(books)
    },
    delete: (req, res) => {
        let { id } = req.params
        let index = books.findIndex(book => +book.id === +id)

        books.splice(index, 1)
        res.send(books)
    },
    // getRandomFictionBook: (req, res) => {
    //     let { id } = req.params
    //     let index = randomFictionBooks.findIndex(book => +book.id === +id)
    //     res.send(randomFictionBooks[index])
    // },
    // getRandomNonFictionBook: (req, res) => {
    //     let { id } = req.params
    //     let index = randomNonFictionBooks.findIndex(book => +book.id === +id)
    //     res.send(randomNonFictionBooks[index])
    // },
    getBySearch: (req, res) => {
        let search = req.query.title.toLowerCase()

        let booksFound = books.filter(book => {
            return book.title.toLowerCase().includes(search)
        })
        res.send(booksFound)
    }
}