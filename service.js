const fs = require('fs')
const json = fs.readFileSync('./storage.json')
const arr = JSON.parse(json)

function getAllData() {
    if (!arr.length) throw new Error('Array is empty')
    return arr
}

function getDataById(id) {
    const data = arr.filter(el => el.id == id)
    if (!data.length) throw new Error('This id not found')
    return data
}

function addData(label, category, priority) {
    const newObject = {
        id: label.toLowerCase(),
        label: label,
        category: category,
        priority: priority
    }
    if (newObject.id !== arr.id) arr.push(newObject)
    fs.writeFileSync('./storage.json', JSON.stringify(arr))
    return arr
}

function updateData(id, label, category, priority) {
    const newObject = {
        id: id, 
        label: label,
        category: category,
        priority: priority
    }
    const data = arr.findIndex(el => el.id == id)
    arr[data] = newObject
    if (!data.length) throw new Error ('this id not found')
    fs.writeFileSync('./storage.json', JSON.stringify(arr))
    return arr
}

function deleteData(id) {
    const newArr = arr.filter(el => el.id !== id) 
    if (arr.length == newArr.length) throw new Error ('this id not found')
    fs.writeFileSync('./storage.json', JSON.stringify(arr))
    return newArr
}

module.exports = { getAllData, getDataById, addData, updateData, deleteData }