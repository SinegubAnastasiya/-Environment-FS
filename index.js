const express = require('express')
const app = express()
const { getAllData, getDataById, addData, updateData, deleteData } = require('./service')
const bodyParser = require('body-parser')

app.use(bodyParser.json())


app.get('/', (req, res) => {
    try {
        const data = getAllData()
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send(error.message)
    }

})

app.get('/:id', (req, res) => {
    try {
        const { id } = req.params
        const data = getDataById(id)
        res.send(data)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

app.post('/', (req, res) => {
    try {
        const { label, category, priority } = req.body
        const data = addData(label, category, priority)
        res.send(data)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

app.put('/:id', (req, res) => {
    try {
        const { id } = req.params
        const { label, category, priority } = req.body
        const data = updateData(id, label, category, priority)
        res.send(data)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

app.delete('/:id', (req, res) => {
    try {
        const { id } = req.params
        const data = deleteData(id)
        res.send(data)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

app.listen(3000, () => console.log('Server is running'))