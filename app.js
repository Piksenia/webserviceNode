const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
const port = 9080

app.get('/test', (req, res) => {
    res.send({"message" : "OK"})
})

app.get('/testArray', (req, res) => {
    res.send([{"message": "OK1"}, {"message": "OK2"}])
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})