const express = require('express')
const { default: mongoose } = require('mongoose')
const tourRouter = require('./Routers/tour.router')
const app = express()
const port = process.env.PORT||4000
mongoose.connect(`mongodb+srv://marufMubin:marufmubin123@cluster0.ri4vwpn.mongodb.net/?retryWrites=true&w=majority`, (err) => console.log('db is connected'))

app.use(express.json())

app.use('/tours', tourRouter) 
app.use('/', (req, res) => res.send('home'))

app.listen(port, (res) => console.log('port is running'))
