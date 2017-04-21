const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')
const port = 3000 || process.env.PORT

const app = express()

// App config
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// App routes
app.get('/', (req,res)=> {
  res.render('index', {msg: null})
})
app.get('/skills/:ganti', (req,res)=> {
  res.render('index', {msg: req.params.ganti})
})
app.get('/meals', (req,res)=> {
  res.render('index', {msg: null})
})

// Server listen
app.listen(port)
console.log(`Listening to ${port}`)