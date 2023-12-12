const fs = require('fs')
const json = fs.readFileSync('./storage.json')
const arr = JSON.parse(json)

function getAllData() {
    return arr
}

function getDataById(id) {
    const data = arr.filter(el => el.id == id)
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

    fs.writeFileSync('./storage.json', JSON.stringify(arr))
    return arr
}

function deleteData(id) {
    const newArr = arr.filter(el => el.id !== id) 

    fs.writeFileSync('./storage.json', JSON.stringify(arr))
    return newArr
}

module.exports = { getAllData, getDataById, addData, updateData, deleteData }