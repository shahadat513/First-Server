const express = require('express')
const app = express()
let cors = require("cors");
const port = process.env.PORT || 5000

// middleware
app.use(cors());
app.use(express.json())

const users = [
    { id: 1, name: 'Lal', age: 12, email: 'lal@gmail.com' },
    { id: 2, name: 'Nil', age: 15, email: 'Nil@gmail.com' },
    { id: 3, name: 'Yellow', age: 18, email: 'Yellow@gmail.com' }
]

app.get('/', (req, res) => {
    res.send('Hello World   !')
})

app.get('/users', (req, res) => {
    res.send(users)
})

app.post('/users', (req, res) => {
    console.log(res.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser)
    res.send(newUser)

})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})