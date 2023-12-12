const express = require('express')
const app = express()
const { getAllData, getDataById, addData, updateData, deleteData } = require('./service')
const bodyParser = require('body-parser')

app.use(bodyParser.json())


app.get('/', (req, res) => {
    const data = getAllData()
    res.send(data)
})

app.get('/:id', (req, res) => {
    const { id } = req.params
    const data = getDataById(id)
    res.send(data)
})

app.post('/', (req, res) => {
    const { label, category, priority} = req.body
    const data = addData(label, category, priority)
    res.send(data)
})

app.put('/:id', (req, res) => {
    const { id } = req.params
    const { label, category, priority } = req.body
    const data = updateData(id, label, category, priority)
    res.send(data)
})

app.delete('/:id', (req, res) => {
    const { id } = req.params
    const data = deleteData(id)
    res.send(data)
})

app.listen(3000, () => console.log('Server is running'))