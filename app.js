const express = require('express')
const cors = require('cors')



// app config 
const app = express()

// middleware
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

// port and connection
PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log(`App listening to port ${PORT}`)
})

// routes
app.get('/', (req, res)=>{
    res.send("Hello")
})
