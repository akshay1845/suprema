const express = require('express')
const path = require('path');

const app = express()



app.use('/public', express.static(path.join(__dirname,'/public')))
app.use(express.urlencoded({ extended: true }))
// app.use(express.json())
app.set("view engine", 'ejs')
// app.set('views','views')

// app.use(logger) // always on top - for globally use <== MIDDLEWARE


app.use('/', require('./routes/index' ))

app.listen(5000);