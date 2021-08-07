'use strict'
const path = require('path')
const express = require('express')

const app = express()

const staticPath = path.join(__dirname, '/')

app.use(express.static(staticPath))

const PORT = 4000
// allow port setting in project properties
app.set('port', process.env.PORT || PORT)



const server = app.listen(app.get('port'), () => {
    console.log('listening at port:', PORT)
})

// server.request(e => {
//     console.log('[][][]', e)
// })

console.log('[ SERVER ]', server.request)

