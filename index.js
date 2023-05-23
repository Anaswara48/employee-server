const express = require('express')
const server = express()
const cors = require('cors')
server.use(cors({ orgin: 'http://localhost:3000' }))

// data conversion to json to js
server.use(express.json())

const logic = require('./services/logic')

server.listen(8000, () => {
    console.log(".................ems server started..................");
})

// get all employees

server.get('/getAllEmployee', (req, res) => {
    logic.getAllEmployee().then(result => {
        res.status(result.statusCode).json(result)
    })
})

server.get('/getEmployee/:id', (req, res) => {
    logic.getEmployee(req.params.id).then(result => {
        res.status(result.statusCode).json(result)
    })
})

server.delete('/deleteEmployee/:id', (req, res) => {
    logic.removeEmployee(req.params.id).then(result => {
        res.status(result.statusCode).json(result)
    })
})

server.post('/addEmployee', (req, res) => {
    logic.addNewEmployee(req.body.id,
        req.body.name,
        req.body.designation,
        req.body.salary,
        req.body.experience)
        .then(result => {
            res.status(result.statusCode).json(result)
        })
})

server.post('/editEmployee', (req, res) => {
    logic.editEmployee(req.body.id,
        req.body.name,
        req.body.designation,
        req.body.salary,
        req.body.experience)
        .then(result => {
            res.status(result.statusCode).json(result)
        })
})