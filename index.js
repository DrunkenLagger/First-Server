const express = require('express')
const bodyParser = require("body-parser")
const router = require('./routes')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


/**
 * Middlewware to assign a unique request id
 */
app.all("*", (req, res, next) => {
    req.reqId = Math.random()
    console.log(`${req.reqId} | ${new Date} | ${req.method} | ${req.url} | ${req.method == 'GET' ? JSON.stringify(req.query) : JSON.stringify(req.body)}`)
    next()
})
app.get('/', (req, res) => res.send("Welocome to Micro-Services app"))
app.use(router)


app.listen(6000, () => {
    console.log("<-------- MicroService  is listenning on port------->", 6000);

})


// userHelper.readUsers(null, (results) => {
//     logger.info("Results ------ users", results)
// 

