const cors = require("cors")
const body_parser = require("body-parser")
const express = require("express")
const morgan = require("morgan")

var path = require("path")

var app = express()

var users = [
    { id: 1, name: "MrSdk", age: 21 },
    { id: 2, name: "Bilolbek", age: 28 },
    { id: 3, name: "Samandar", age: 14 },
    { id: 4, name: "Sohib", age: 21 },
    { id: 5, name: "Jalil", age: 28 },
    { id: 6, name: "Eldor", age: 14 },
    { id: 7, name: "Yusuf", age: 21 },
    { id: 8, name: "Temur", age: 28 },
    { id: 9, name: "Rashid", age: 14 },
    { id: 10, name: "Mahmud", age: 21 },
    { id: 11, name: "Jasur", age: 28 },
    { id: 12, name: "Layliddin", age: 14 },
    { id: 13, name: "Yoldosh", age: 21 },
    { id: 14, name: "Bexruz", age: 28 },
    { id: 15, name: "Bekzod", age: 14 },
    { id: 16, name: "Saif", age: 21 },
    { id: 17, name: "Said", age: 28 },
    { id: 18, name: "Musurmon", age: 14 },
    { id: 19, name: "Umid", age: 21 },
    { id: 20, name: "Farrux", age: 28 },
    { id: 21, name: "Jack", age: 14 },
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