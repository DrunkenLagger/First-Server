const express = require('express')
const { nextTick } = require('process')
const router = express.Router()

router.get('/list', (req, res) => {
    try {
        console.log("/admins/list")
    } catch (error) {
        console.log("Error Occured", error.message)
        res.json(error)
    }
})


router.post('/add', (req, res) => {
    try {
        console.log("in/admins/add")
    } catch (error) {
        console.log("Error Occured", error.message)
        res.json(error)
    }
})

router.post('/update', async (req, res) => {
    try {
        console.log("in/admins/update")
    } catch (error) {
        console.log("Error Occured", error.message)
        res.json(error)
    }
})

router.post('/deleteUser', (req, res) => {
    try {
        console.log("in/admins/deleteUser")
    } catch (error) {
        console.log("Error Occured", error.message)
        res.json(error)
    }
})

router.post("/square", (req, res) => {
    try {
        console.log("Enter the Length of side of Square", req);
        res.json({
            "area": req.body.side * req.body.side,
            "perimeter": 4 * req.body.side,
        })
    } catch (error) {
        console.log('Cannot Perform Operation')
    }
})

router.post("/circle", (req, res) => {
    try {
        console.log("Enter the radius", req.body)
        res.json({
            "area": req.body.radius * req.body.radius,
            "perimeter": 6.28 * req.body.radius,
        })
    } catch (error) {
        console.log("Not a valid no.")
    }
})

router.post("/triangle", (req, res) => {
    try {
        console.log("Enter the length of one side", req.body)
        res.json({
            "area": 0.433 * req.body.side,
            "perimeter":3 * req.body.side,
        })
    } catch (error) {
        console.log("Not a valid no.")
    }
})
router.post("/rect", (req, res) => {
    try {
        console.log("Enter the length and breadth", req.body)
        res.json({
            "area": req.body.length * req.body.breadth,
            "perimeter": 2 * (req.body.length + req.body.breadth),
        })
    } catch (error) {
        console.log("Not a valid no.")
    }
})

module.exports = router
