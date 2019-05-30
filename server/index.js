let express = require('express')
let app = express()
let ctrl = require('./controllers')
const port = 5050

app.use(express.json())

app.get('/api/books', ctrl.read)
app.post('/api/books', ctrl.create)
app.put('/api/books/:id', ctrl.update)
app.delete('/api/books/:id', ctrl.delete)

app.listen(port, () => console.log(`listening on port ${port}`))