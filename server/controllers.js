let id = 1

let books = [
    {
        id: id++,
        title: 'Harry Potter And The Goblet Of Fire',
        author: 'JK Rowling',
        genre: 'Young Adult',
        pages: 636,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEGpdfTkZXnlLPiiiTRWL6alN3jJfavzFeSOZPvwT80P8tAB4K"
    },
    {
        id: id++,
        title: 'Game Of Thrones',
        author: 'George RR Martin',
        genre: 'Fantasy',
        pages: 694,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Nk_b7e3aHkHMCp-WPrkNcp3ZzraoeRAOflF_SxyepfdbyYzj'
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
    }
}