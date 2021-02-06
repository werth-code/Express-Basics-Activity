const bodyParser = require('body-parser')

const express = require('express') // imports express
const app = express();  //creates obj from constructor

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

let balance = 0
const addBalance = amount => balance += amount
const subtractBalance = amount => balance -= amount

app.get("/", (req, res) => { 
    res.send("HIYA !!!! There!")
})

app.get("/balance", (req, res) => { 
    res.send(`Balance: ${balance}`)
})

app.post("/deposit/:amount", (req, res) => { // This allows us to send info in a post
    amount = parseInt(req.params.amount)
    addBalance(amount)
    res.send(`Balance: ${balance}`)
})


app.post("/withdraw/:amount", (req, res) => { // This allows us to send info in a post
    amount = parseInt(req.params.amount)
    subtractBalance(amount)
    res.send(`Balance: ${balance}`)
})

app.listen(3200, () => console.log("Up & Running!")); //listen at port...