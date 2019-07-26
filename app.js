const cors = require("cors")
const body_parser = require("body-parser")
const express = require("express")
const morgan = require("morgan")

var path = require("path")

var app = express()

var users = [
    { name: "MrSdk", age: 21 },
    { name: "Bilolbek", age: 28 },
    { name: "Samandar", age: 14 },
]

app.use(cors())
app.use(body_parser.json())
app.use(body_parser.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use('/', express.static(path.join(__dirname, 'angular')))


app.get('/api/user/:id', (req, res) => {
    var a = users[req.params.id];

    res.status(200).json(a);
})

app.get('/api/users', (req, res) => {
    var a = { users };

    res.status(200).json(a);
})

app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'angular', 'index.html'))
})

module.exports = app